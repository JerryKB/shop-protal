<template>
    <div class="content">
        <div class="w">
            <p>填写并核对订单信息</p>
            <div class="content-top">
                <div class="message">
                    <p>收件人信息</p>
                    <div class="address" style="margin-bottom: 15px">
                        <span>{{userInfo.real_name}}</span>
                        <p> <v-region-selects
                                v-model="region"
                                @change="regionChange"
                                town

                        /></p>
                        <el-input v-model="detail" style="width: 140px;margin-left: 10px;" placeholder="请输入详细内容"></el-input>
                        <el-input v-model.number="mobile" style="width: 160px;margin-left: 10px;" placeholder="请输入电话号码"></el-input>
                    </div>


                </div>
                <div class="message">
                    <p>送货清单</p>
                    <div class="me-bt">
                        <span>配送方式</span>
                        <div class="me-bb">
                            <span><i>顺丰</i>快递</span>

                        </div>
                    </div>
                    <div class="me-bd">
                        <span>订单详情</span>
                        <div class="me-bs" >
                            <span>
                                <img :src="productDetail.url" width="100%"  alt="">
                            </span>
                            <p>
                                {{productDetail.name}}
<!--                                <i>7天无理由退货</i>-->
                            </p>
                            <div class="price">￥{{productDetail.sum}}</div>
                            <div class="num">X{{productDetail.num}}</div>
                        </div>
                    </div>
                </div>
                <div class="message clearfix me-line">
                    <p>发票信息</p>
                    <div class="address">
                        <span style="font-size: 12px;">普通发票（电子）     个人     明细     <a href="#">修改</a></span>
                    </div>
                    <dl>
                        <dt>{{productDetail.num}}件商品，总商品金额：</dt><dd>¥{{productDetail.sum}}</dd>

                    </dl>
                </div>
                <div class="me-money">
                    <p>应付总额 ： <span>¥{{productDetail.sum}}</span></p>
                    <p>寄送至：{{address}}  收货人：{{userInfo.real_name}}</p>
                </div>
                <a  class="me-commit" @click="toPay">提交订单</a>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "submit-order-index",
        // props:['orders'],
        methods:{
            toPay(){
                let form={
                    user_id:this.userInfo.id,
                    product_price:this.productDetail.sum,
                    product_count:this.productDetail.num,
                    order_reciever:this.userInfo.real_name,
                    order_mobile:this.mobile
                }
                this.getRequest('/order/addOrder/'+form.order_reciever+"/"+form.order_mobile+"/"+form.user_id+"/"+form.product_price+"/"+form.product_count+"/"+this.productDetail.id).then(data=>{
                    console.log(data)
                })
                this.$router.push('/paySuccess')
            },
            regionChange(data){
                console.log(data)
                this.address=data.province.value+data.city.value+data.area.value+data.town.value+this.detail
            }
        },
        data(){
            return {
                userInfo:'',
                region:undefined,
                detail:'',
                productDetail:this.$route.query.orders,
                product:'',
                mobile:'',
                address:''
            }
        },
        mounted() {

            this.userInfo=JSON.parse(window.sessionStorage.getItem("userInfo"));
        },

    }
</script>

<style scoped>
    body {
        background-color: #fff;
    }
    .m {
        border-bottom: 2px solid #e01222;
    }
    .content {
        margin-left: 200px;
        background-color: #fff;
        padding-top: 20px;
        overflow: hidden;
    }
    .content p {
        font-size: 16px;
        color: #656565;
    }
    .content-top {
        width: 1148px;
        margin: 30px 26px 0 26px;
        overflow: hidden;
    }
    .message {
        /* height: 116px; */
        padding-top: 10px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
    }
    .message p {
        color: #333;
        font-size: 14px;
        font-weight: 700;
        display: inline;
    }
    .message .address {
        margin: 28px 0 0 60px;
        font-size: 14px;
        color: #656565;
        height: 40px;
    }
    .address span {
        margin-right: 60px;
    }
    .address p {
        display: inline-block;
        color: #656565;
    }
    .message a {
        margin: 0 0 20px 28px;
    }
    .message .kuaidi {
        display: flex;
        margin-top: 28px;
    }
    .kuaidi li {
        float: left;
        flex: 1;
        height: 36px;
        padding-left: 70px;
        cursor: pointer;
    }
    .message li span {
        float: left;
        line-height: 36px;
        margin-left: 15px;
    }
    .kuaidi i {
        display: block;
        width: 36px;
        height: 36px;
        float: left;
        background: url(./images/kuaidi.png) no-repeat;
    }
    .kuaidi li:nth-child(1) i {
        background-position: 0 -180px;
    }
    .kuaidi li:nth-child(2) i {
        background-position: 0 -324px;
    }
    .kuaidi li:nth-child(3) i {
        background-position: 0 -468px;
    }
    .kuaidi li:nth-child(4) i {
        background-position: 0 -648px;
    }
    .kuaidi li:nth-child(5) i {
        background-position: 0 -684px;
    }
    .message .current {
        border: 1px solid #ccc;
    }
    .m-pay {
        display: flex;
        margin-top: 20px;
    }
    .m-pay li {
        text-align: center;
        flex: 1;
        line-height: 36px;
        cursor: pointer;
    }
    .me-bt {
        height: 100px;
        background-color: #F3F3F3;
        margin: 20px 0 1px;
        padding: 20px 0 0 30px;
    }
    .me-bt span,
    .me-bd span {
        display: block;
        color: #656565;
        font-size: 12px;
        height: 30px;
    }
    .me-bb,
    .me-bs {
        width: 100%;
        position: relative;
    }
    .me-bb span {
        width: 145px;
        height: 30px;
        border: 1px solid #ccc;
        line-height: 30px;
        text-align: center;
        float: left;
    }
    .me-bb i {
        font-style: normal;
    }
    .me-bb p{
        overflow: hidden;
        text-overflow: ellipsis;
        /*弹性伸缩盒子模型显示*/
        display: -webkit-box;
        /*限制在一个块元素显示的文本的行数*/
        -webkit-line-clamp: 1;
        /*设置或检索伸缩盒对象的子元素的排列方式*/
        -webkit-box-orient: vertical; /*vertical:从上到下子排列*/
    }
    .me-bb p,
    .me-bs p {

        display: inline-block;
        float: left;
        width: 334px;
        margin-left: 50px;
        line-height: 32px;
        font-weight: 400;
        color: #656565;
        font-size: 12px;
    }

    .me-bb a,
    .me-bs a {
        position: absolute;
        top: 0;
        right: 35px;
        line-height: 32px;
    }
    .me-bd {
        height: 154px;
        background-color: #FDECEE;
        padding: 20px 0 0 30px;
    }
    .me-bs span {
        width: 80px;
        height: 80px;
        border: 1px solid #ccc;
        float: left;
        margin-right: 65px;
    }
    .me-bs p {
        position: relative;
        line-height: 20px;
    }
    .me-bs p i {
        color: #C71523;
        font-style: normal;
        position: absolute;
        bottom: -30px;
        left: 0;
    }
    .price {
        float: left;
        width: 384px;
        text-align: right;
        font-size: 14px;
        color: #E02127;
    }
    .num {
        float: left;
        width: 64px;
        text-align: right;
        color: #656565;
        font-size: 12px;
    }
    .me-bs a {
        top: -10px;
    }
    .message dl {
        float: right;
        font-size: 12px;
        color: #333;
        width: 225px;
        margin-right: 5px;
    }
    .message dt {
        float: left;
        text-align: right;
        line-height: 20px;
        width: 128px;
    }
    .message dd {
        float: right;
        width: 80px;
        text-align: right;
        line-height: 20px;
    }
    .mess-red {
        color: #E50012;
        font-weight: 700;
    }
    .me-money {
        background-color: #F3F3F3;
        height: 70px;
        padding: 20px 10px 20px 0;
        box-sizing: border-box;
    }
    .content-top .me-line {
        border-bottom: 0;
    }
    .me-money p {
        text-align: right;
        font-size: 12px;
        color: #656565;
        line-height: 20px;
    }
    .me-money p span {
        color: #E50012;
        font-size: 16px;
        font-weight: 700;
    }
    .me-commit {
        display: block;
        float: right;
        width: 142px;
        height: 48px;
        font-size: 18px;
        color: #fff;
        background-color: #f10180;
        text-align: center;
        line-height: 48px;
        margin-top: 20px;
        cursor: pointer;
    }
    .me-commit:hover {
        background-color: #ed6a5a;
        color: #fff;
    }

</style>
