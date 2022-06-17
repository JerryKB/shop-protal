<template>
    <div class="outer">
        <!-- 主要内容区域 -->
        <section class="con">

            <!-- 主要内容区域 -->
            <div class="mainCon">
                <!-- 左侧放大镜区域 -->
                <div class="previewWrap">
                    <!--放大镜效果-->
                    <div class="preview">
                        <div class="jqzoom">
                            <img :src="product.img_src" />
                            <div class="mask"></div>

                        </div>
                        <div class="maxbox">
                            <img :src="product.img_src">
                        </div>
                    </div>
                </div>
                <div class="InfoWrap">
                    <div class="goodsDetail">
                        <h3 class="InfoName">{{product.name}}</h3>
                        <div class="priceArea">
                            <div class="priceArea1">
                                <div class="title">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</div>
                                <div class="price">
                                    <i>¥</i>
                                    <em>{{product.price}}</em>

                                </div>

                            </div>
                            <div class="priceArea2">
                                <div class="title">
                                    <i>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</i>
                                </div>
                                <div class="fixWidth">
                                    <i class="red-bg">直击底价，后惠无期。</i>

                                </div>
                            </div>
                        </div>
                        <div class="support">
                            <div class="supportArea">
                                <div class="title">支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</div>
                                <div class="fixWidth">顺丰</div>
                            </div>
                        </div>

                    </div>

                    <div class="choose">
                        <div class="chooseArea">
                            <dl>
                                <dt class="title">颜色</dt>
                                <dd @click="select1(index,s)" :class="index===current? activeColor:'none'" :ref="index"  v-for="(s,index) in attribute_list.color" :key="index">{{s}}</dd>


                            </dl>
                            <dl>
                                <dt class="title">规格</dt>
                                <dd v-for="(s,index)  in attribute_list.size"  :class="index===current2? activeColor:'none'" :key="index" @click="select2(index,s)">{{s}}</dd>
                                <dd v-for="(s,index) in attribute_list.specification"  :class="index===current2? activeColor:'none'" :key="index" @click="select2(index,s)">{{s}}</dd>
                            </dl>
                            <div class="choosed">
                                <span></span>
                            </div>
                        </div>

                        <div class="cartWrap">
                            <div class="controls">
                                <input autocomplete="off" v-model="num" class="itxt" />
                                <a href="javascript:void(0);" class="plus" @click="plus">+</a>
                                <a href="javascript:void(0);" class="mins" @click="del">-</a>
                            </div>
                            <div class="add">
                                <a href="javascript:void(0);" @click="add">加入购物车</a>
                            </div>
                            <div class="add" style="margin-left: 10px">
                                <a @click="buy" href="javascript:void(0);">立即购买</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 内容详情页 -->
        <section class="productDetail">
            <aside class="aside">
                <div class="tabWraped">
                    <h4 class="active">相关分类</h4>
                </div>
                <div class="tabContent">
                    <div class="tab-pane active">
                        <ul class="goodsList">
                            <li v-for="(p,index) in part" :key="index">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img :src="p.img_src"/>
                                    </div>
                                    <div class="attr">{{p.name}} </div>
                                    <div class="price">
                                        <em>¥</em>
                                        <i>{{p.price}}</i>
                                    </div>
                                    <div class="operate">
                                        <a href="javascript:void(0);">加入购物车</a>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div class="tab-pane">
                        <p>推荐品牌</p>
                    </div>
                </div>
            </aside>
            <div class="detail">
                <div class="intro">
                    <ul class="tab-wraped">
                        <li :class="active[0].name" >
                            <a @click="changeClass(0)" href="#one">
                                商品介绍
                            </a>
                        </li>
                        <li :class="active[1].name" >
                            <a @click="changeClass(1)" href="#two">
                                规格与包装
                            </a>
                        </li>
                        <li :class="active[2].name"  @click="changeClass(2)">
                            <a href="#three">
                                售后保障
                            </a>
                        </li>
                        <li  :class="active[3].name" @click="changeClass(3)">
                            <a href="#four">
                                商品评价
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="one" class="tab-pane active">

                            <div class="intro-detail">
                                <img :src="product.img_src" />

                            </div>
                        </div>
                        <div id="two" class="tab-pane">
                            <p>规格与包装</p>
                        </div>
                        <div id="three" class="tab-pane">
                            <p>售后保障</p>
                        </div>
                        <div id="four" class="tab-pane">
                            <p>商品评价</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>

    export default {
        name: "detail-index",
        data(){
            return{
                num:1,
                active:[
                    {name:'active'},{name:''},{name:''},{name:''}],
                product:this.$store.state.product,
                attribute_list:JSON.parse(this.$store.state.product.attribute_list),
                color:'',
                other:'',
                current:0,
                current2:0,
                activeColor:'activeColor',
                part:{},
                size:'',
                sigle:0,
            }
        },
        mounted() {
            this.amplify();
            this.getRequest("/product/getPartProduct/"+this.product.category_id+"/"+6).then(data=>{
                this.part=data;
            })
            this.sigle=this.product.price
            this.color=this.attribute_list.color[0];
           if (this.attribute_list.size){
               this.size=this.attribute_list.size[0]
           }else{
               this.size=this.attribute_list.specification[0]
           }
                },
        methods:{
            amplify(){
                let box = document.querySelector('.jqzoom');
                let big = document.querySelector('.maxbox');
                let mask = document.querySelector('.mask');
                let bigImg = document.querySelector('.maxbox img')
                box.addEventListener('mouseover',function () {
                    mask.style.display = 'block';
                    big.style.display='block'
                })
                box.addEventListener('mouseout',function () {
                    mask.style.display = 'none';
                    big.style.display='none'
                })
                box.addEventListener('mousemove',function (e) {
                    let maskPosition = {
                        left: e.clientX - mask.offsetWidth / 2 - box
                            .getBoundingClientRect().left,
                        top: e.clientY - mask.offsetHeight / 2 - box
                            .getBoundingClientRect().top,
                    }
                    //判断临界值
                    if (maskPosition.left <= 0) {
                        maskPosition.left = 0;
                    } else if (maskPosition.left >= box.clientWidth - mask.offsetWidth) {
                        maskPosition.left = box.clientWidth - mask.offsetWidth;
                    }
                    if (maskPosition.top <= 0) {
                        maskPosition.top = 0;
                    } else if (maskPosition.top >= box.clientHeight - mask.offsetHeight) {
                        maskPosition.top = box.clientHeight - mask.offsetHeight;
                    }

                    //对蒙版赋值
                    mask.style.left = maskPosition.left + "px";
                    mask.style.top = maskPosition.top + "px";

                    //计算比例：（蒙版可以移动的距离 /  大图能够被移动的距离）
                    let scale = (box.clientWidth - mask.offsetWidth) / (bigImg.offsetWidth -
                        big.clientWidth);
                    //计算大图移动的位置
                    let maxPosition = {
                        left: maskPosition.left / scale,
                        top: maskPosition.top / scale
                    }
                    bigImg.style.marginTop = -maxPosition.top + "px";
                    bigImg.style.marginLeft = -maxPosition.left + "px";

                })
            },
            changeClass(num){
                for (let i=0;i<this.active.length;i++){
                    this.active[i].name='';
                }
                this.active[num].name='active';


            },
            buy(){
                let form={
                    name:this.product.name,
                    id:this.product.id,
                    url:this.product.img_src,
                    sum:this.product.price*this.num,
                    color:this.color,
                    size:this.size,
                    num:this.num
                }

                if(window.sessionStorage.getItem("userInfo")==null||window.sessionStorage.getItem("userInfo")==''){
                    this.$router.push('/login')
                }else{
                    this.$router.push({
                        path:'/subOrder',
                        query:{
                            orders: form
                        }
                    })
                }

            },
            plus(){
                this.num++;

                this.product.price=this.sigle*this.num
            },
            del() {
                if (this.num === 1) {
                    return
                }
                this.num--;
                this.product.price=this.sigle*this.num
            },
            select1(index,s){
                this.current=index
                // console.log(s[index])
                this.color = s;

            },
            select2(index,s){
                this.current2 = index;
                this.size = s;

            },
            add(){
                if(window.sessionStorage.getItem("userInfo")==null||window.sessionStorage.getItem("userInfo")==''){
                    this.$router.push('/login')
                }else{
                    let form={
                        product_num:this.num,
                        product_id:this.product.id,
                        products_price:this.product.price,
                        user_id:JSON.parse(window.sessionStorage.getItem("userInfo")).id

                    }
                    this.postRequest('/shopcar/add',form).then(data=>{
                        if (data.code===200){
                            this.$message.success(data.message)
                        }else {
                            this.$message.error(data.message)
                        }
                    })
                }

            }


        }


    }



</script>

<style scoped>
    .activeColor{

        /*background-color: #f10180;*/
        /*display: block;*/
        border: 1px solid #f10180 !important ;
    }


    .outer .con {
        width: 1200px;
        margin: 15px auto 0;
    }
    .outer .con .conPoin {
        padding: 9px 15px 9px 0;
    }
    .outer .con .conPoin > a + a:before {
        content: "/\00a0";
        padding: 0 5px;
        color: #ccc;
    }
    .outer .con .mainCon {
        overflow: hidden;
        margin: 5px 0 15px;
    }
    .outer .con .mainCon .previewWrap {
        float: left;
        width: 400px;
        position: relative;
    }
    .outer .con .mainCon .previewWrap .preview {
        width: 400px;
        height: 400px;
        border: 1px solid #DFDFDF;
    }
    .outer .con .mainCon .previewWrap .preview .jqzoom {
        cursor: pointer;
        width: 400px;
        height: 400px;
        position: relative;
    }
    .outer .con .mainCon .previewWrap .preview .jqzoom img {
        width: 100%;
    }
    .outer .con .mainCon .previewWrap .preview .jqzoom .mask {
        display: none;
        width: 200px;
        height: 200px;
        background:yellow;
        opacity: 0.3;
        position: absolute;
        left: 0;
        top: 0;
        border: 1px solid #ddd;
    }
    .outer .con .mainCon .previewWrap .preview .maxbox {
        display: none;
        width: 400px;
        height: 400px;
        position: absolute;
        left: 420px;
        top: 0px;
        overflow: hidden;
        z-index: 20;
        border: 1px solid #ddd;
    }
    .outer .con .mainCon .previewWrap .preview .maxbox.maxbox img {
        width: 800px;
        height: 800px;
        display: block;
    }
    .outer .con .mainCon .previewWrap .specScroll {
        margin-top: 5px;
        width: 400px;
        overflow: hidden;
    }
    .outer .con .mainCon .previewWrap .specScroll .prev,
    .outer .con .mainCon .previewWrap .specScroll .next {
        text-align: center;
        width: 10px;
        height: 54px;
        line-height: 54px;
        border: 1px solid #CCC;
        background: #EBEBEB;
        cursor: pointer;
    }
    .outer .con .mainCon .previewWrap .specScroll .prev {
        float: left;
        margin-right: 4px;
    }
    .outer .con .mainCon .previewWrap .specScroll .next {
        float: right;
    }
    .outer .con .mainCon .previewWrap .specScroll .items {
        float: left;
        position: relative;
        width: 372px;
        height: 56px;
        overflow: hidden;
    }
    .outer .con .mainCon .previewWrap .specScroll .items .itemsCon {
        position: absolute;
        width: 9999px;
        height: 56px;
        left: 0;
    }
    .outer .con .mainCon .previewWrap .specScroll .items .itemsCon img {
        float: left;
        text-align: center;
        border: 1px solid #CCC;
        padding: 2px;
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }
    .outer .con .mainCon .InfoWrap {
        width: 700px;
        float: right;
    }
    .outer .con .mainCon .InfoWrap .InfoName {
        font-size: 14px;
        line-height: 21px;
        margin-top: 15px;
    }
    .outer .con .mainCon .InfoWrap .news {
        color: #f10180;
        margin-top: 15px;
    }
    .outer .con .mainCon .InfoWrap .priceArea {
        background: #fee9eb;
        padding: 7px;
        margin: 13px 0;
    }
    .outer .con .mainCon .InfoWrap .priceArea .priceArea1 {
        overflow: hidden;
        line-height: 28px;
        margin-top: 10px;
    }
    .outer .con .mainCon .InfoWrap .priceArea .priceArea1 .title {
        float: left;
        margin-right: 15px;
    }
    .outer .con .mainCon .InfoWrap .priceArea .priceArea1 .price {
        float: left;
        color: #c81623;
    }
    .outer .con .mainCon .InfoWrap .priceArea .priceArea1 .price i {
        font-size: 16px;
    }
    .outer .con .mainCon .InfoWrap .priceArea .priceArea1 .price em {
        font-size: 24px;
        font-weight: 700;
    }
    .outer .con .mainCon .InfoWrap .priceArea .priceArea1 .price span {
        font-size: 12px;
    }
    .outer .con .mainCon .InfoWrap .priceArea .priceArea1 .remark {
        float: right;
    }
    .outer .con .mainCon .InfoWrap .priceArea .priceArea2 {
        overflow: hidden;
        line-height: 28px;
        margin-top: 10px;
    }
    .outer .con .mainCon .InfoWrap .priceArea .priceArea2 .title {
        margin-right: 15px;
        float: left;
    }
    .outer .con .mainCon .InfoWrap .priceArea .priceArea2 .fixWidth {
        width: 520px;
        float: left;
    }
    .outer .con .mainCon .InfoWrap .priceArea .priceArea2 .fixWidth .red-bg {
        background: #c81623;
        color: #fff;
        padding: 3px;
    }
    .outer .con .mainCon .InfoWrap .priceArea .priceArea2 .fixWidth .t-gray {
        color: #999;
    }
    .outer .con .mainCon .InfoWrap .support {
        border-bottom: 1px solid #ededed;
        padding-bottom: 5px;
    }
    .outer .con .mainCon .InfoWrap .support .supportArea {
        overflow: hidden;
        line-height: 28px;
        margin-top: 10px;
    }
    .outer .con .mainCon .InfoWrap .support .supportArea .title {
        margin-right: 15px;
        float: left;
    }
    .outer .con .mainCon .InfoWrap .support .supportArea .fixWidth {
        width: 520px;
        float: left;
        color: #999;
    }
    .outer .con .mainCon .InfoWrap .choose .chooseArea {
        overflow: hidden;
        position: relative;
        line-height: 28px;
        margin-top: 10px;
    }
    .outer .con .mainCon .InfoWrap .choose .chooseArea .choosed mark {
        height: 30px;
        display: inline-block;
        line-height: 30px;
        background-color: snow;
        border: 1px solid #ddd;
        padding: 0 20px;
        margin-right: 20px;
    }
    .outer .con .mainCon .InfoWrap .choose .chooseArea .choosed mark a {
        font-size: 12px;
        color: red;
        margin-left: 20px;
        cursor: pointer;
    }
    .outer .con .mainCon .InfoWrap .choose .chooseArea dl {
        overflow: hidden;
        margin: 13px 0;
    }
    .outer .con .mainCon .InfoWrap .choose .chooseArea dl dt {
        margin-right: 15px;
        float: left;
    }
    .outer .con .mainCon .InfoWrap .choose .chooseArea dl dd {
        width: 30px;
        text-align: center;
        float: left;
        margin-right: 5px;
        font-size: 10px;
        color: #666;
        line-height: 24px;
        padding: 2px 14px;
        border-top: 1px solid #eee;
        border-right: 1px solid #bbb;
        border-bottom: 1px solid #bbb;
        border-left: 1px solid #eee;
    }
    .outer .con .mainCon .InfoWrap .choose .chooseArea dl dd:hover{
        cursor: pointer;
    }
    .outer .con .mainCon .InfoWrap .choose .chooseArea dl dd:nth-of-type(1) {
        font-size: 10px;
    }
    .outer .con .mainCon .InfoWrap .choose .cartWrap .controls {
        width: 48px;
        position: relative;
        float: left;
        margin-right: 15px;
    }
    .outer .con .mainCon .InfoWrap .choose .cartWrap .controls .itxt {
        width: 38px;
        height: 35px;
        border: 1px solid #ddd;
        color: #555;
        float: left;
        border-right: 0;
        text-align: center;
    }
    .outer .con .mainCon .InfoWrap .choose .cartWrap .controls .plus,
    .outer .con .mainCon .InfoWrap .choose .cartWrap .controls .mins {
        width: 15px;
        text-align: center;
        height: 17px;
        line-height: 17px;
        background: #f1f1f1;
        color: #666;
        position: absolute;
        right: -8px;
        border: 1px solid #ccc;
    }
    .outer .con .mainCon .InfoWrap .choose .cartWrap .controls .mins {
        right: -8px;
        top: 19px;
        border-top: 0;
    }
    .outer .con .mainCon .InfoWrap .choose .cartWrap .controls .plus {
        right: -8px;
    }
    .outer .con .mainCon .InfoWrap .choose .cartWrap .add {
        float: left;
    }
    .outer .con .mainCon .InfoWrap .choose .cartWrap .add a {
        background-color: #f10180;
        padding: 0 25px;
        font-size: 16px;
        color: #fff;
        height: 36px;
        line-height: 36px;
        display: block;
    }
    .outer .productDetail {
        width: 1200px;
        margin: 30px auto 0;
        overflow: hidden;
    }
    .outer .productDetail .aside {
        width: 210px;
        float: left;
        border: 1px solid #ccc;
    }
    .outer .productDetail .aside .tabWraped {
        height: 40px;
    }
    .outer .productDetail .aside .tabWraped h4 {
        border-top: 3px solid #fff;
        float: left;
        line-height: 37px;
        width: 211px;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
    .outer .productDetail .aside .tabWraped h4.active {
        border-top: 3px solid #f10180;
        border-bottom: 0;
        font-weight: normal;
    }
    .outer .productDetail .aside .tabContent {
        padding: 10px;
    }
    .outer .productDetail .aside .tabContent .tab-pane {
        display: none;
    }
    .outer .productDetail .aside .tabContent .tab-pane.active {
        display: block;
    }
    .outer .productDetail .aside .tabContent .tab-pane:nth-child(1) .partList {
        overflow: hidden;
    }
    .outer .productDetail .aside .tabContent .tab-pane:nth-child(1) .partList li {
        width: 50%;
        float: left;
        border-bottom: 1px dashed #ededed;
        line-height: 28px;
    }
    .outer .productDetail .aside .tabContent .tab-pane:nth-child(1) .goodsList > li {
        margin: 5px 0 15px;
        border-bottom: 1px solid #ededed;
        padding-bottom: 5px;
    }
    .outer .productDetail .aside .tabContent .tab-pane:nth-child(1) .goodsList > li .list-wrap .attr{
        overflow: hidden;
        text-overflow: ellipsis;
        /*弹性伸缩盒子模型显示*/
        display: -webkit-box;
        /*限制在一个块元素显示的文本的行数*/
        -webkit-line-clamp: 2;
        /*设置或检索伸缩盒对象的子元素的排列方式*/
        -webkit-box-orient: vertical; /*vertical:从上到下子排列*/

    }
    .outer .productDetail .aside .tabContent .tab-pane:nth-child(1) .goodsList > li .list-wrap .p-img {
        text-align: center;
    }
    .outer .productDetail .aside .tabContent .tab-pane:nth-child(1) .goodsList > li .list-wrap .p-img img {
        width: 152px;
    }
    .outer .productDetail .aside .tabContent .tab-pane:nth-child(1) .goodsList > li .list-wrap .price {
        font-size: 16px;
        color: #c81623;
    }
    .outer .productDetail .aside .tabContent .tab-pane:nth-child(1) .goodsList > li .list-wrap .operate {
        text-align: center;
        margin: 5px 0;
    }
    .outer .productDetail .aside .tabContent .tab-pane:nth-child(1) .goodsList > li .list-wrap .operate a {
        background-color: transparent;
        border: 1px solid #8c8c8c;
        color: #8c8c8c;
        display: inline-block;
        padding: 2px 14px;
        line-height: 18px;
    }
    .outer .productDetail .detail {
        width: 980px;
        float: right;
    }
    .outer .productDetail .detail .fitting {
        border: 1px solid #ddd;
        margin-bottom: 15px;
    }
    .outer .productDetail .detail .fitting .kt {
        border-bottom: 1px solid #ddd;
        background: #f1f1f1;
        color: #333;
        padding: 5px 0 5px 15px;
    }
    .outer .productDetail .detail .fitting .good-suits {
        height: 170px;
        padding-top: 10px;
    }
    .outer .productDetail .detail .fitting .good-suits .master {
        width: 127px;
        height: 165px;
        text-align: center;
        position: relative;
        float: left;
    }
    .outer .productDetail .detail .fitting .good-suits .master img {
        width: 87px;
    }
    .outer .productDetail .detail .fitting .good-suits .master p {
        color: #c81623;
        font-size: 16px;
        font-weight: 700;
    }
    .outer .productDetail .detail .fitting .good-suits .master i {
        position: absolute;
        top: 48px;
        right: -25px;
        font-size: 16px;
    }
    .outer .productDetail .detail .fitting .good-suits .suits {
        width: 668px;
        height: 165px;
        float: left;
    }
    .outer .productDetail .detail .fitting .good-suits .suits .suitsItem {
        float: left;
        width: 127px;
        padding: 0 20px;
        text-align: center;
    }
    .outer .productDetail .detail .fitting .good-suits .suits .suitsItem img {
        width: 120px;
        height: 130px;
    }
    .outer .productDetail .detail .fitting .good-suits .suits .suitsItem p {
        font-size: 12px;
    }
    .outer .productDetail .detail .fitting .good-suits .suits .suitsItem label {
        display: block;
        position: relative;
    }
    .outer .productDetail .detail .fitting .good-suits .suits .suitsItem label input {
        vertical-align: middle;
    }
    .outer .productDetail .detail .fitting .good-suits .suits .suitsItem label span {
        vertical-align: middle;
    }
    .outer .productDetail .detail .fitting .good-suits .result {
        border-left: 1px solid #ddd;
        width: 153px;
        height: 165px;
        padding-left: 20px;
        float: left;
    }
    .outer .productDetail .detail .fitting .good-suits .result .num {
        font-size: 14px;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .outer .productDetail .detail .fitting .good-suits .result .price-tit {
        font-weight: bold;
        margin-bottom: 10px;
    }
    .outer .productDetail .detail .fitting .good-suits .result .price {
        color: #B1191A;
        font-size: 16px;
        margin-bottom: 10px;
    }
    .outer .productDetail .detail .fitting .good-suits .result .addshopcar {
        background-color: #e1251b;
        border: 1px solid #e1251b;
        padding: 10px 25px;
        font-size: 16px;
        color: #fff;
        display: inline-block;
        box-sizing: border-box;
    }
    .outer .productDetail .detail .intro .tab-wraped {
        background: #ededed;
        overflow: hidden;
    }
    .outer .productDetail .detail .intro .tab-wraped li {
        float: left;
    }
    .outer .productDetail .detail .intro .tab-wraped li + li > a {
        border-left: 1px solid #ddd;
    }
    .outer .productDetail .detail .intro .tab-wraped li.active a {
        background: #f10180;
        color: #fff;
    }
    .outer .productDetail .detail .intro .tab-wraped li a {
        display: block;
        height: 40px;
        line-height: 40px;
        padding: 0 11px;
        text-align: center;
        color: #666;
        background: #fcfcfc;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
    }
    .outer .productDetail .detail .intro .tab-content .tab-pane {
        /*display: none;*/
    }
    .outer .productDetail .detail .intro .tab-content .tab-pane.active {
        display: block;
    }
    .outer .productDetail .detail .intro .tab-content .tab-pane:nth-child(1) .goods-intro {
        padding-left: 10px;
    }
    .outer .productDetail .detail .intro .tab-content .tab-pane:nth-child(1) .goods-intro li {
        margin: 10px 0;
    }
    .outer .productDetail .detail .intro .tab-content .tab-pane:nth-child(1) .intro-detail img {
        width: 100%;
    }
    .outer .like {
        width: 1198px;
        border: 1px solid #ddd;
        margin: 15px auto;
    }
    .outer .like .kt {
        border-bottom: 1px solid #ddd;
        background: #f1f1f1;
        color: #333;
        margin: 0;
        padding: 5px 10px;
    }
    .outer .like .like-list {
        padding: 15px 11px;
        overflow: hidden;
    }
    .outer .like .like-list .likeItem {
        width: 196px;
        float: left;
    }
    .outer .like .like-list .likeItem .p-img {
        text-align: center;
    }
    .outer .like .like-list .likeItem .p-img img {
        width: 167px;
        height: 123px;
    }
    .outer .like .like-list .likeItem .attr {
        height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        /*弹性伸缩盒子模型显示*/
        display: -webkit-box;
        /*限制在一个块元素显示的文本的行数*/
        -webkit-line-clamp: 2;
        /*设置或检索伸缩盒对象的子元素的排列方式*/
        -webkit-box-orient: vertical; /*vertical:从上到下子排列*/
    }
    .outer .like .like-list .likeItem .price {
        padding: 0 15px;
        font-size: 16px;
        color: #c81623;
        margin-bottom: 20px;
    }
    .outer .like .like-list .likeItem .commit {
        padding: 0 15px;
    }


</style>
