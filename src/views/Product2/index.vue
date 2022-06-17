<template>

    <div class="wapper">

        <!-- 筛选区 -->
        <div class="sift">
            <!-- 操作 -->
            <div class="oper">
                <!-- 综合 -->
                <div class="siftLine" id="all">综合</div>
                <!-- 销售 -->
<!--                <div class="siftLine" id="sales">销量</div>-->
                <!-- 价格 -->
                <div class="siftLine" id="price">价格
                </div>
                <!-- 折扣 -->
<!--                <div class="siftLine" id="discot">折扣</div>-->
                <!-- 价格填写区域 -->
                <div class="siftLine" id="priceArea">
                    <div id="areaStart">
                        <input type="text" placeholder="￥">
                    </div>
                    <p>—</p>
                    <div id="areaEnd">
                        <input type="text" placeholder="￥">
                    </div>
                    <div class="oper_hide">
                        <div class="oper_hideBtn">确定</div>
                        <div class="oper_hideBtn">取消</div>
                    </div>
                </div>
            </div>

        </div>
        <div class="goodsItems">
            <div class="goodsLine">
                <!-- 第一行 -->
                <div class="goodsLine_one clearfix" >
                    <div class="gline_goodBox" v-for="(p,index) in products" :key="index">
                        <div class="gLine_good">
                            <img :src="p.img_src" alt="">
                            <div class="mti_into" @click="buy(p)">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥{{p.price}}</div>
                                </div>
                                <div class="goodsItems_name">{{p.name}}</div>
                            </div>
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
        // props:['id'],
        data(){
            return{
                products:{}
            }
        },
        mounted() {
            console.log(this.$store.state.products)
                this.products=this.$store.state.products
        },
        methods:{
            buy(p){

                this.$store.dispatch('getProduct',p)
                this.$router.push({
                    path:'/details',
                })

            }
        }
    }
</script>

<style scoped>
    .wapper{
        width: 1000px;
        margin: 0 auto;
        padding-top: 15px;
        /*border:1px solid red;*/
    }
    /*选择框默认大小*/
    .choose{
        width: 998px;
        height: 150px;
        font-size: 12px;
        border: 1px solid #dfdfdf;
    }
    .server, .brand, .type, .size, .material{
        width: 998px;
        height: 50px;
    }

    .server, .brand, .size{
        border-bottom: 1px dotted #ddd;
    }

    /*更多选项按钮*/
    .loadMore{
        width: 118px;
        height: 26px;
        margin: 0 auto;
        text-align: center;
        line-height: 26px;
        cursor: pointer;
        border-left: 1px solid #dfdfdf;
        border-right: 1px solid #dfdfdf;
        border-bottom: 1px solid #dfdfdf;
    }

    /*选择框每列的标题*/
    .title{
        width: 98px;
        height: 18px;
        color: #666;
        padding: 16px 0 16px 20px;
        float: left;
    }
    .content{
        width: 711px;
        height: 16px;
        float: left;
        padding: 16px 0;
    }
    .choose .content li{
        /*width: 48px;*/
        width: 66px;
        height: 16px;
        margin-right: 50px;
        float: left;
    }

    /*多选框无勾选样式*/
    .choose_uncheckBox{
        width: 12px;
        height: 12px;
        float: left;
        margin-right: 4px;
        border: 1px solid #666;
        display: none
    }

    /*多选框已勾选样式*/
    .choose_checkBox{
        width: 12px;
        height: 12px;
        float: left;
        font-size: 14px;
        color: #7cbf13;
        margin-right: 4px;
        border: 1px solid #666;
        display: none
    }

    .content li p{
        /*width: 32px;*/
        /*margin-left: 10px;*/
        /*padding-right: 30px;*/
    }

    /*多选按钮*/
    .multiChoseBtn{
        width: 46px;
        height: 20px;
        margin: 16px 0px 16px 92px;
        cursor: pointer;
        float: left;
        border: 1px solid #d1d1d1;
        border-radius: 3px;
    }


    /*多选后确认或取消按钮*/
    .checkSureBox{
        width: 998px;
        height: 22px;
        clear: left;
        display: none;
    }
    .checkSure{
        width: 136px;
        margin: 0 auto;
    }
    .choose_sureBtn, .choose_cancelBtn{
        width: 56px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        cursor: pointer;
        float: left;
    }

    .choose_sureBtn{
        margin-right: 20px;
        color: #fff;
        background-color: #f43499;
        border: 1px solid #f10180;
    }
    .choose_cancelBtn{
        color: #333;
        background-color: #fafafa;
        border: 1px solid #c2c2c2;
    }


    .chooseHide{
        display: none;
    }
    .size .title{
        margin-left: -830px;
    }

    /*点击收起按钮*/
    .close{
        width: 118px;
        height: 26px;
        margin: 0 auto;
        text-align: center;
        line-height: 6px;
        cursor: pointer;
        border-left: 1px solid #dfdfdf;
        border-right: 1px solid #dfdfdf;
        border-bottom: 1px solid #dfdfdf;
    }

    .choose li:hover{
        color: #f10180;
        cursor: pointer;
    }

    /*筛选区*/
    .sift{
        width: 998px;
        height: 46px;
        margin-top: 52px;
        font-size: 12px;
        text-align: center;
        background-color: #f5f5f5;
        border: 1px solid #dfdfdf;

    }
    .siftLine, #areaStart, #areaEnd, .page, .siftLine p{
        float: left;
    }
    .oper .siftLine{
        width: 67px;
        height: 46px;
        border-right: 1px solid #dfdfdf;
    }
    .oper .siftLine:hover{
        color: #f10180;
    }
    .oper{
        line-height: 48px;
    }

    .oper #all{
        background-color: #fff;
        color: #f10180;
    }
    .siftLine{
        cursor: pointer;
    }
    /*价格输入框*/
    #priceArea{
        width: 286px;
        padding-left: 20px;
    }
    #areaStart, #areaEnd{
        width: 66px;
        height: 15px;
    }
    #areaStart input, #areaEnd input{
        width: 62px;
        height: 22px;
        border: 1px solid #dbdbdb;
    }

    .oper_hide{
        /*display: */
    }
    .oper_hideBtn{
        width: 36px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        color: #fff;
        float: left;
        margin: 14px 0 0 15px;
        background-color: #f20280;
        border-radius: 2px;
        cursor: pointer;
        /*display: none;*/
    }

    #priceArea:hover{
        background-color: #fff;
    }

    /*#priceArea:hover .oper_hide{
        display: block;
    }*/

    /*筛选框右边*/
    .page{
        width: 244px;
        height: 26px;
        line-height: 26px;
        margin-left: 162px;
        padding: 10px 10px 10px 0;
    }
    #goodsTotal{
        width: 74px;
        height: 21px;
        margin-right: 22px;
    }
    #pageNub{
        width: 29px;
        height: 21px;
    }
    #pagePre{
        width: 25px;
        height: 24px;
        margin-left: 12px;
        background: #fafafa;
        color: #ccc;
        border:1px solid #dbdbdb;
    }
    #pageNext{
        width: 49px;
        height: 24px;
        margin-left: 10px;
        padding: 0 10px 0 9px;
        background-color: #fff;
        cursor: pointer;
        border: 1px solid #b8b8b8;
    }

    #pageNext i{
        margin-left: 4px;
    }

    .page_bright{
        color: #f10180;
        font-weight: bold;
    }

    .mti_into{
        width: 70px;
        height: 70px;
        text-align: center;
        line-height: 70px;
        position: absolute;
        top: -75px;
        left: 80px;
        border-radius: 50%;
        border: 1px solid #ccc;
        background-color: #ffffff6e;
        /* display: none; */
    }
    .goodsLine_one{
        /*border: 1px solid black;*/
        overflow: hidden;
    }
    .gLine_good:hover .mti_into{
        top: 70px;
        transition: all .6s;
    }

    .gLine_good:hover img{
        opacity: 0.8;
    }
    .gLine_good img{
        height: 235px;
    }

    /*款式展示主体内容*/
    .goodsItems{
        /*height: 1920px;*/
        margin-top: 20px;
        /*border:1px solid blue;*/
    }

    .gline_goodBox{
        width: 230px;
        height: 356px;
        padding: 5px;
        margin: 6px 0 0 6px;
        border:1px solid #fff;
        cursor: pointer;
        float: left;

    }
    .gLine_good{
        width: 230px;
        height: 356px;
        position: relative;
        overflow: hidden;
        border:1px solid  #e7e7e7;;
    }

    .gline_goodBox:hover{
        border: 1px solid #f10180;
    }
    .gLine_good:hover{
        border: 1px solid #fff;
    }
    /*下框box*/
    .gLine_g_bottom{
        width: 208px;
        height: 102px;
        margin: 4px auto 0;
    }
    /*折后价信息*/
    .gI_price_msg{
        float: left;
    }
    .goodsItems_price{
        width: 208px;
        height: 20px;
        padding: 10px 0;
    }
    .goodsItems_price #gI_price_title{
        height: 18px;
        border-radius: 15px;
        color: #fff;
        font-size: 12px;
        padding: 0 4px;
        margin-right: 4px;
        background-image: linear-gradient(270deg,#e456ff 0,#ff31a3 100%);
        background-color: #ff38c0;
    }
    #gI_price_now{
        color: #333;
        font-size: 23px;
        line-height: 18px;
        font-weight: 700;
    }
    #gI_price_before{
        color: #999;
        text-decoration: line-through;
        margin-left: 4px;
        font-size: 14px;
    }
    #gI_price_discot{
        color: #999;
        margin-left: 4px;
        font-size: 14px;
    }
    .goodsItems_name{
        overflow: hidden;
        text-overflow: ellipsis;
        /*弹性伸缩盒子模型显示*/
        display: -webkit-box;
        /*限制在一个块元素显示的文本的行数*/
        -webkit-line-clamp: 2;
        /*设置或检索伸缩盒对象的子元素的排列方式*/
        -webkit-box-orient: vertical; /*vertical:从上到下子排列*/
        font-size: 12px;
        color: #666;
        line-height: 18px;
        margin-bottom: 8px;
    }

    .goodsLine_one, .goodsLine_three, .goodsLine_four, .goodsLine_five{
        clear: both;
    }
    .clearfix:after{
        content:"";
        display:block;
        height:0;
        clear:both;
        visibility:hidden;
    }
    .clearfix{
        *zoom:1;/*兼容i6，i7浏览器*/
    }

</style>
