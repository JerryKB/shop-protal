<template>
    <div class="py-container">
        <div class="w">
            <div class="allgoods">
                <h4>全部商品
                    <span>11</span>
                </h4>
                <div class="cart-main">
                    <div class="cart-th clearfix">
                        <div><input type="checkbox" v-model="checkedAll" @change="changeState">全选</div>
                        <div class="">商品</div>
<!--                        <div class="">单价（元）</div>-->
                        <div class="">数量</div>
                        <div class="">小计（元）</div>
                        <div class="">操作</div>
                    </div>
                    <div class="cart-title clearfix">

                    </div>
                    <div class="cart-item-list">
                        <div class="cart-body">
                            <div class="cart-list">
                                <ul class="goods-list yui3-g" v-for="(c,index) in cars" :key="c.id">
                                    <li class="yui3-u-3-8 pr">
                                        <input type="checkbox" v-model="checkModel" :value="index" @click="select(c)"  class="good-checkbox">
                                        <div class="good-item">
                                            <div class="item-img">
                                                <img :src="c.img_src">
                                            </div>
                                            <div class="item-msg">{{c.name}}</div>
                                        </div>
                                    </li>

<!--                                    <li class="yui3-u-1-8">-->
<!--                                        <span class="price">{{car.price}}</span>-->
<!--                                    </li>-->
                                    <li class="yui3-u-1-8">
                                        <div class="clearfix">
                                            <a href="javascript:;" class="increment mins" @click="des(index)">-</a>
                                            <input autocomplete="off" type="text" v-model="c.product_num" minnum="1" class="itxt">
                                            <a href="javascript:;" @click="plus(index)" class="increment plus">+</a>
                                        </div>
<!--                                        <div class="youhuo">有货</div>-->
                                    </li>
                                    <li class="yui3-u-1-8">
                                        <span class="sum">{{c.products_price}}</span>
                                    </li>
                                    <li class="yui3-u-1-8">
                                        <div class="del1">
                                            <a href="javascript:void(0);" @click="del(c.id)">删除</a>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <span class="text" v-if="cars===null">暂无商品添加</span>
                    </div>

                </div>
                <div class="cart-tool clearfix">
                    <div class="money-box">
                        <div class="sumprice">
                            <div class="sumprice-top">
                                <span>
                                    已选择
                                    <strong>{{checkModel.length}}</strong> 件商品</span>

                                <em>总价（不含运费）：</em>
                                <i class="summoney">￥<span>{{sum}}</span></i>
                            </div>
                            <div class="sumprice-bottom">
                                已节省：￥20.00
                            </div>
                        </div>
                        <div class="sumbtn">
                            <a class="sum-btn" href="javascript:void(0)" @click="result">结算</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                checkedAll:false,
                cars:null,
                checkModel:[],
                sum:0,
                selectOrder:[]
            }
        },
        mounted() {
            this.init();



        },
        methods:{
            init(){
                this.getRequest("/shopcar/getAll/"+JSON.parse(window.sessionStorage.getItem("userInfo")).id).then(data=>{
                    console.log(data)
                    this.cars=data

                })
            },
            changeState(){
                this.checkModel = [];
                if(this.checkedAll){
                    for (let i=0;i<this.cars.length;i++){
                        this.sum+=this.cars[i].products_price
                    }
                    for(let i in this.cars){
                        this.checkModel.push(this.cars[i].id)
                    }
                }else {
                    this.sum=0
                }
            },
            select(c){

                console.log(c)
                if(typeof c.makeChoose=='undefined'){  //这里要注意,因为checked字段根本不在this.getProductList里面,所以你要自己赋值进去
                   c.makeChoose=true

                }else{
                    c.makeChoose=!c.makeChoose

                }
                if (c.makeChoose){
                    this.sum+=c.products_price
                }else{
                    this.sum-=c.products_price
                }


            },
            del(id){
                this.deleteRequest("/shopcar/deleteShopCar/"+id).then(data=>{
                    if (data.code==200){
                        this.$message.success(data.message)
                    }else {
                        this.$message.error(data.message)
                    }
                })
                this.init()


            },
            plus(index){
                let single=this.cars[index].products_price/this.cars[index].product_num;
                this.cars[index].product_num++
                this.cars[index].products_price=this.cars[index].product_num*single;
            },
            des(index){
                if (this.cars[index].product_num==1)return
                let single=this.cars[index].products_price/this.cars[index].product_num;
                this.cars[index].product_num--
                this.cars[index].products_price=this.cars[index].product_num*single;
            },
            result(){

                for (let i=0;i<this.cars.length;i++){
                    if (this.cars[i].makeChoose==true){
                        this.getRequest('/order/addOrder/'+JSON.parse(window.sessionStorage.getItem('userInfo')).real_name+"/"+0+"/"+JSON.parse(window.sessionStorage.getItem('userInfo')).id+"/"+this.cars[i].products_price+"/"+this.cars[i].product_num+"/"+this.cars[i].product_id).then(data=>{
                            console.log(data)
                        })
                        this.$router.push('/paySuccess')
                    }
                }
            }
        },
        watch:{
            checkModel :{
                handler (){
                    if(this.checkModel.length === this.cars.length){
                        this.checkedAll = true
                    }else{
                        this.checkedAll = false
                    }
                },
                deep: true
            },

        }
    }
</script>

<style scoped>

    .m {
        border-bottom: 2px solid #e01222;
    }
    .py-container {
        margin: 0 auto;
        width: 1200px;
        background-color: #fff;
    }
    .allgoods {
        margin-bottom: 30px;
        min-height: 500px;
    }
    .allgoods h4 {
        color: #333;
        padding: 9px 0;
    }
    .cart-main {
        font-size: 12px;
    }
    .cart-th {
        padding: 10px;
        border: 1px solid #ddd;
        background: #f5f5f5;
    }
    .cart-title h5 {
        line-height: 20px;
    }
    .cart-shop {
        padding: 10px 9px 5px;
        border-bottom: 2px solid #ddd;
    }
    .cart-tool {
        overflow: hidden;
        /* border: 1px solid #ddd;. */
    }

    .cart-shop .self {
        padding: 2px;
        background: #c81623;
        color: #fff;
    }

    .cart-body,
    .deled {
        margin: 15px 0;
    }

    .cart-list ul {
        padding: 10px;
        /* border-bottom: 1px solid #ddd; */
    }
    .yui3-u-1-8, .yui3-u-3-24 {
        width: 12.5%;
    }
    .cart-list ul li {
        display: inline-block;
        *display: inline;
        *zoom: 1;
    }

    .price,
    .sum,
    .shopname,
    .itxt {
        font-family: "微软雅黑";
    }

    .shopname {
        font-size: 14px;
    }

    .self {
        font-size: 12px;
    }

    .price,
    .sum {
        font-size: 16px;
    }

    .good-item {
        padding: 0 10px;
    }

    .item-img {
        float: left;
        width: 100px;
        height: 90px;
    }

    .item-txt {
        padding: 0 10px;
    }

    .goods-list input {
        border: 1px solid #ddd;
    }

    a.increment {
        padding: 8px;
        width: 6px;
        text-align: center;
        text-decoration: none;
        -moz-padding-top: 10px;
        -moz-padding-bottom: 13px;
        -webkit-padding-top: 10px;
        -webkit-padding-bottom: 13px;
    }

    .mins {
        float: left;
        border: 1px solid #ddd;
        border-right: 0;
    }

    .plus {
        float: left;
        border: 1px solid #ddd;
        border-left: 0;
    }

    .itxt {
        float: left;
        width: 40px;
        height: 34px;
        text-align: center;
        font-size: 14px;
        zoom: 1;
    }

    .select-all,
    .option {
        float: left;
        overflow: hidden;
        padding: 10px;
    }

    .option a {
        float: left;
        padding: 0 10px;
    }

    .money-box {
        float: right;
    }

    .chosed,
    .sumprice {
        float: left;
        padding: 0 10px;
    }

    .chosed {
        line-height: 26px;
    }

    .sumprice {
        /* width: 200px; */
        line-height: 26px;
        text-align: right;
    }

    .sumprice em {
        text-align: right;
    }

    .sumbtn {
        float: right;
    }

    .summoney {
        color: #c81623;
        font: 16px "微软雅黑";
    }

    a.sum-btn {
        position: relative;
        display: block;
        overflow: hidden;
        width: 110px;
        height: 52px;
        background: #E60012;
        color: #fff;
        text-align: center;
        /* font-size: 18px; */
        font-family: "Microsoft YaHei";
        line-height: 52px;
        margin-left: 30px;
    }

    .del {
        background: #fffdee;
    }

    .del .goods-list {
        display: block;
        overflow: hidden;
        margin-top: 15px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .sui-nav.nav-tabs {
        overflow: hidden;
        padding-left: 0;
        border: 1px solid #ddd;
        background: #f1f1f1;
    }

    .sui-nav.nav-tabs>li>a {
        padding: 10px 20px;
        border: 0;
        font-family: "微软雅黑";
    }

    .sui-nav.nav-tabs>.active>a {
        border: 0;
        border-radius: 0;
        background-color: #c81623;
        color: #fff;
    }

    .item ul {
        margin: 0 auto;
        width: 1000px;
    }

    .item ul li {
        position: relative;
        display: inline-block;
        margin-right: -7px;
        padding: 20px;
        border: 1px dashed #ddd;
        list-style-type: none;
        zoom: 1;
        *display: inline;
        *zoom: 1;
    }

    .carousel-control {
        width: 22px;
        border: 0;
        border-radius: 0;
        background: #ddd;
    }

    .intro,
    .money,
    .incar {
        line-height: 20px;
    }

    .money,
    .incar {
        text-align: center;
    }

    .money {
        color: #c81623;
        font: 14px "微软雅黑";
    }

    .incar {
        margin: 10px 0;
    }

    .car {
        position: absolute;
        width: 20px;
        height: 20px;

        background-position: -422px -135px;
    }

    .cartxt {
        padding-left: 23px;
    }

    .goods-list {
        display: flex !important;
        align-items: center;
    }

    .item-img img {
        max-height: 100%;
    }

    .item-msg {
       width: 473px;
        white-space: nowrap;
        overflow: hidden;

        line-height: 45px;
        text-overflow: ellipsis;
        padding: 20px 0;
    }

    .success-cart {
        padding: 30px 0 100px;
        background-color: #f4f4f4;
    }

    .other-item.py-container {
        margin-bottom: 15px;
    }

    .success-cart h3 {
        margin: 0;
        padding-top: 10px;
        padding-bottom: 10px;
        color: #6AAF04;
        font-weight: 400;
        font-size: 16px;
    }

    .success-cart .icon-pc-right {
        margin-right: 8px;
        padding: 3px;
        border: 2px solid #6AAF04;
        border-radius: 15px;
        background-color: #fff;
    }

    .success-cart .goods {
        overflow: hidden;
        padding: 10px 0;
    }

    .success-cart .goods .left-good {
        float: left;
    }

    .success-cart .goods .right-gocart {
        float: right;
    }

    .left-good .left-pic {
        float: left;
        width: 60px;
        border: 1px solid #dfdfdf;
    }

    .left-good .right-info {
        float: left;
        margin-left: 10px;
        color: #444;
    }

    .left-good .right-info p {
        margin-top: 0;
        margin-bottom: 0;
    }

    .right-info .title {
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        line-height: 28px;
    }

    .right-info .attr {
        color: #aaa;
    }

    .right-gocart a {
        padding: 7px 36px;
        font-size: 15px;
    }

    .right-gocart .btn-danger {
        background-color: #b1191a;
    }

    .right-gocart .btn-danger:hover {
        background-color: #b33637;
    }

    .checkout {
        margin: 20px auto;
    }

    .checkout-steps {
        padding: 25px;
        border: 1px solid #ddd;
        font-family: "微软雅黑";
    }

    .step-tit {
        margin: 15px 0;
        line-height: 36px;
    }

    .step-cont {
        margin: 0 10px 10px 20px;
    }

    .step-cont ul li {
        overflow: hidden;
        list-style-type: none;
    }

    .step-cont .con {
        float: left;
        margin: 5px 0;
        padding: 0;
    }

    .seven {
        margin-top: 20px;
        color: #c81623;
    }

    .price {
        color: #e12228;
        font: 14px "微软雅黑";
        font-weight: 700;
    }

    ul.addr-detail li {
        margin: 10px 0;
        width: 99%;
    }

    .recommendAddr {
        margin-top: 10PX;
    }

    ul.payType li {
        position: relative;
        display: inline-block;
        padding: 5px 20px;
        border: 1px solid #ddd;
        cursor: pointer;
        *display: inline;
        _zoom: 1;
        *margin: 5px 10px;
    }

    .step-cont li.selected {
        border: 1px solid #c81623;
    }

    .addr-item .name {
        border: 1px solid #ddd;
        text-align: center;
    }

    .addressInfo .sui-modal {
        width: 565px;
    }

    .addr-item .name a {
        position: relative;
        display: block;
        padding: 5px 38px;
        outline: 0;
        color: inherit;
        text-decoration: none;
    }

    .addr-item.selected {
        border: 0 !important;
    }

    .addr-item.selected .name {
        border: 1px solid #c81623;
    }

    .addr-item .name a span {
        position: absolute;
        right: 0;
        bottom: 0;
        display: none;
        overflow: hidden;
        width: 13px;
        height: 13px;
        /*background: url(./img/choosed.png) no-repeat;*/
        /*_right: -1px;*/
        /*_bottom: -1px;*/
    }

    .addr-item .name.selected span {
        display: block;
    }

    .addr-item .address {
        margin-left: 10px;
        padding-left: 5px;
        width: 55%;
        line-height: 30px;
    }

    .addr-item .address:hover {
        cursor: pointer;
    }

    .addr-item .address .edittext {
        visibility: hidden;
        padding-left: 15px;
    }

    .address-hover {
        background-color: #ddd;
    }

    .address-hover .edittext {
        visibility: visible !important;
    }

    .addr-item .address .base {
        margin-left: 10px;
        padding: 4px;
        background-color: #878787;
        color: #fff;
    }

    .payshipInfo span {
        font-weight: 700;
    }

    ul.send-detail li {
        margin-top: 10px;
        line-height: 30px;
    }

    .sendType .express {
        margin-right: 10px;
        width: 120px;
        border: 1px solid #ddd;
        text-align: center;
    }

    .sendType,
    .sendGoods {
        padding: 15px;
    }

    .sendType {
        margin-bottom: 2px;
        background: #f4f4f4;
    }

    .sendGoods {
        background: #feedef;
    }

    .num,
    .exit {
        text-align: center;
    }

    .order-summary {
        overflow: hidden;
        margin-bottom: 50px;
    }

    .list,
    .trade {
        line-height: 26px;
    }

    .list em {
        font-family: "微软雅黑";
    }

    .trade {
        margin: 10px auto;
        padding: 10px;
        border: 1px solid #ddd;
        background-color: #f4f4f4;
        text-align: right;
    }

    .trade .fc-receiverInfo {
        color: #999;
    }

    .order-summary .btn-xlarge {
        float: right;
        margin: 0 0 10px;
        padding: 15px 45px;
        border-radius: 0;
        font: 18px "微软雅黑";
        font-weight: 700;
    }

    .sendGoods img {
        max-height: 100px;
        display: block;
        margin: 0 auto;
    }

    .cart-th>div {
        float: left;
    }

    .cart-th>div>input {
        margin-right: 15px;
    }

    .cart-th div:nth-of-type(2) {
        margin-left: 200px;
        margin-right: 335px;
    }

    .cart-th div:nth-of-type(4) {
        margin-left: 110px;
        margin-right: 115px;
    }

    .cart-th div:nth-of-type(5) {
        margin-right: 110px;
    }

    .cart-title {
        border-bottom: 1px solid #DDDDDD;
        margin-top: 20px;
        padding-bottom: 5px;
    }

    .cart-title>h5 {
        height: 20px;
        width: 55px;
        background-color: #C71523;
        text-align: center;
        color: white;
        margin-left: 25px;
    }

    .yunfei>span {
        color: #C71523;
    }

    .goods-list>li:nth-of-type(3) {
        margin-left: 25px;
    }

    .goods-list>li:nth-of-type(6) {
        margin-left: -25px;
        text-align: center;
    }

    .huangou>span {
        margin-left: 15px;
        color: #C81623;
        margin-right: 25px;
    }

    .huangou-price {
        padding-left: 25px;
    }

    .huangou-del {
        margin-left: -25px;
        text-align: center;
    }

    .huangou-msg {
        width: 310px;
        float: left;
    }

    .huangou-color {
        margin-left: 20px;
        margin-top: 20px;
    }

    .huangou>.huangou-product {
        display: inline-block;
        width: 72px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        background-color: #C81623;
        color: white;
    }

    .gift>ul>li {
        color: #ddd;
        margin-left: 48px;
    }

    .youhuo {
        width: 88px;
        text-align: center;
        color: #ddd;
    }

    .goods-list.active {
        background-color: #FDEDEE;
    }

    .pr {
        position: relative;
    }

    .good-checkbox {
        position: absolute;
        top: 0px;
        left: -5px;
    }

    .cart-tool-left>ul>li {
        float: left;
        margin-left: 15px;
        margin-top: 20px;
    }

    .cart-tool-left>ul>li:nth-of-type(1) {
        margin-left: 30px;
    }

    .sumprice-bottom {
        margin-right: 40px;
    }

    .deleted {
        margin-top: 20px;
    }

    .del-product {
        margin-top: 25px;
        background-color: #FDEDEE;
    }

    .del-product>ul>li {
        float: left;
        height: 30px;
        line-height: 30px;
        color: #ccc;
    }

    .del-product>ul>li:nth-of-type(1) {
        margin-left: 15px;
        margin-right: 345px;
    }

    .del-product>ul>li:nth-of-type(3) {
        margin-left: 155px;
        margin-right: 260px;
    }

    .del-product>ul>li:nth-of-type(4) {
        margin-right: 20px;
    }

    .youLike {
        margin-top: 20px;
    }

    .yk-title {
        height: 40px;
        line-height: 40px;
        background-color: #F1F1F1;
    }

    .yk-title>span {
        width: 88px;
        margin-right: 15px;
        display: inline-block;
        background-color: #C71523;
        text-align: center;
        color: white;
    }

    .yk-product {
        /* border: 1px solid #000; */
        height: 326px;
        position: relative;
        /* line-height: 346px; */
        /* text-align: center; */
    }

    .yk-product>ul {
        margin: 0 auto;
        width: 80%;
        margin-top: 20px;
    }

    .yk-product>ul>li {
        border: 1px dashed #000;
        width: 25%;
        height: 300px;
        float: left;
        box-sizing: border-box;
        margin-left: -1px;
        text-align: center;
    }

    .yk-product>span {
        width: 20px;
        height: 50px;
        position: absolute;
        background-color: #ccc;
        color: white;
        line-height: 50px;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
        font-size: 16px;
        /* left: 0; */
    }

    .yk-product>span:nth-of-type(2) {
        right: 0;
        /* top100 */
    }

    .yk-product-top {
        margin-top: 20px;
    }

    .yk-product-middle>p {
        color: #C81623;
    }

    .yk-product-bottom {
        margin: 0 auto;
        margin-top: 10px;
        border: 1px solid #000;
        border-radius: 1px;
        /* padding-left: 43px;
        background-image: url("../../uploads/car.gif"); */
        /* background-repeat: no-repeat; */
        width: 125px;
        box-sizing: border-box;
    }
    .helpLink>.space{
        width: 0;
        height: 0;
    }
</style>
