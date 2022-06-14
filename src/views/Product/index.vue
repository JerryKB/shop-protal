<template>

    <div class="wapper">
        <!-- 分类选择 -->
<!--        <div class="choose" id="choose">-->
<!--            <div class="show" id="show">-->
<!--                <div class="server">-->
<!--                    <div class="title">唯品服务</div>-->
<!--                    <div class="content">-->
<!--                        <ul>-->
<!--                            <li>-->
<!--                                <div class="choose_uncheckBox"></div>-->
<!--                                <div class="choose_checkBox">-->
<!--                                    <i class="fa fa-check" aria-hidden="true"></i>-->
<!--                                </div>-->
<!--                                <p>超值优惠</p>-->
<!--                            </li>-->
<!--                            <li>-->
<!--                                <div class="choose_uncheckBox"></div>-->
<!--                                <div class="choose_checkBox">-->
<!--                                    <i class="fa fa-check" aria-hidden="true"></i>-->
<!--                                </div>-->
<!--                                <p>新货超前</p>-->
<!--                            </li>-->
<!--                            <li>-->
<!--                                <div class="choose_uncheckBox"></div>-->
<!--                                <div class="choose_checkBox">-->
<!--                                    <i class="fa fa-check" aria-hidden="true"></i>-->
<!--                                </div>-->
<!--                                <p>专柜同步</p>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                    <div class="multiChoseBtn" id="server_multiBtn">&nbsp;+&nbsp;&nbsp;多选</div>-->
<!--                    <div class="checkSureBox">-->
<!--                        <div class="checkSure">-->
<!--                            <div class="choose_sureBtn">确认</div>-->
<!--                            <div class="choose_cancelBtn">取消</div>-->
<!--                        </div>-->

<!--                    </div>-->
<!--                </div>-->
<!--                <div class="brand">-->
<!--                    <div class="title">品牌</div>-->
<!--                    <div class="content">-->
<!--                        <ul>-->
<!--                            <li>Sixty</li>-->
<!--                            <li>a02</li>-->
<!--                            <li>安妮克</li>-->
<!--                            <li>CCDD</li>-->
<!--                            <li>DAZZLE</li>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                    <div class="multiChoseBtn">&nbsp;+&nbsp;&nbsp;多选</div>-->
<!--                </div>-->
<!--                <div class="type">-->
<!--                    <div class="title">品类</div>-->
<!--                    <div class="content">-->
<!--                        <ul>-->
<!--                            <li>连衣裙</li>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="loadMore" id="loadMore">更多选项-->
<!--                    <img src="img/arrow.png" alt="">-->
<!--                    &lt;!&ndash; <i class="fa fa-angle-down" aria-hidden="true"></i> &ndash;&gt;-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="chooseHide" id="chooseHide">-->
<!--                <div class="size">-->
<!--                    <div class="title">尺码</div>-->
<!--                    <div class="content">-->
<!--                        <ul>-->
<!--                            <li>XXS</li>-->
<!--                            <li>XS</li>-->
<!--                            <li>S</li>-->
<!--                            <li>M</li>-->
<!--                            <li>L</li>-->
<!--                            <li>XL</li>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                    <div class="multiChoseBtn">&nbsp;+&nbsp;&nbsp;多选</div>-->
<!--                </div>-->
<!--                <div class="material">-->
<!--                    <div class="title">面料</div>-->
<!--                    <div class="content">-->
<!--                        <ul>-->
<!--                            <li>棉</li>-->
<!--                            <li>纯棉</li>-->
<!--                            <li>棉混纺</li>-->
<!--                            <li>麻</li>-->
<!--                            <li>真丝</li>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                    <div class="multiChoseBtn">&nbsp;+&nbsp;&nbsp;多选</div>-->
<!--                </div>-->
<!--                <div class="close" id="close">点击收起-->
<!--                    <i class="fa fa-angle-up" aria-hidden="true"></i>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <!-- 筛选区 -->
        <div class="sift">
            <!-- 操作 -->
            <div class="oper">
                <!-- 综合 -->
                <div class="siftLine" id="all">综合</div>
                <!-- 销售 -->
                <div class="siftLine" id="sales">销量</div>
                <!-- 价格 -->
                <div class="siftLine" id="price">价格
                </div>
                <!-- 折扣 -->
                <div class="siftLine" id="discot">折扣</div>
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
            <div class="page">
        <span class="siftLine" id="goodsTotal">
          <p class="page_bright">9918</p>
          <p>件商品</p>
        </span>
                <span class="siftLine" id="pageNub">
          <p class="page_bright">1</p>
          <p>/83</p>
        </span>
                <div class="siftLine" id="pagePre">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                </div>
                <div class="siftLine" id="pageNext">
                    <p>下一页
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </p>
                </div>
            </div>
        </div>
        <div class="goodsItems">
            <div class="goodsLine">
                <!-- 第一行 -->
                <div class="goodsLine_one">
                    <div class="gline_goodBox">
                        <div class="gLine_good">
                            <img src="./img/goodsOne/gLine_g_1.png" alt="">
                            <div class="mti_into" @click="buy">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥264</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥1009</div>
                                    <div class="gI_price_msg" id="gI_price_discot">2.7折</div>
                                </div>
                                <div class="goodsItems_name">【2020秋装新品】时尚休闲减龄经典宽松拼接格子长袖连衣裙女</div>
                            </div>
                        </div>
                    </div>

                    <div class="gline_goodBox">
                        <div class="gLine_good">
                            <img src="./img/goodsOne/gLine_g_2.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥191</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥849</div>
                                    <div class="gI_price_msg" id="gI_price_discot">2.6折</div>
                                </div>
                                <div class="goodsItems_name">20夏季新款撞色花边镂空翻领短袖复古小黑裙鱼尾连衣裙女裙子</div>
                            </div>
                        </div>
                    </div>
                    <div class="gline_goodBox">
                        <div class="gLine_good">
                            <img src="./img/goodsOne/gLine_g_3.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥84</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥458</div>
                                    <div class="gI_price_msg" id="gI_price_discot">2.7折</div>
                                </div>
                                <div class="goodsItems_name">20夏季新款清新日系撞色拼接娃娃领百褶裙摆连衣裙</div>
                            </div>
                        </div>
                    </div>
                    <div class="gline_goodBox">
                        <div class="gLine_good" id="gLine_g_last">
                            <img src="./img/goodsOne/gLine_g_4.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥57</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥436</div>
                                    <div class="gI_price_msg" id="gI_price_discot">2.7折</div>
                                </div>
                                <div class="goodsItems_name">2020夏季百搭黑色打底内搭裙子背心裙针织连衣裙吊带连衣裙子</div>
                            </div>
                        </div>
                    </div>
                </div>



                <!-- 第二行 -->
                <div class="goodsLine_two">
                    <div class="gline_goodBox">
                        <div class="gLine_good">
                            <img src="./img/goodsTwo/gLine_g_1.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥264</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥1009</div>
                                    <div class="gI_price_msg" id="gI_price_discot">2.7折</div>
                                </div>
                                <div class="goodsItems_name">【2020秋装新品】时尚休闲减龄经典宽松拼接格子长袖连衣裙女</div>
                            </div>
                        </div>
                    </div>

                    <div class="gline_goodBox">
                        <div class="gLine_good">
                            <img src="./img/goodsTwo/gLine_g_2.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥67</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥379</div>
                                    <div class="gI_price_msg" id="gI_price_discot">1.7折</div>
                                </div>
                                <div class="goodsItems_name">【夏末清仓】新款休闲短袖V领五分袖时尚三十而已女连衣裙</div>
                            </div>
                        </div>
                    </div>
                    <div class="gline_goodBox">
                        <div class="gLine_good">
                            <img src="./img/goodsTwo/gLine_g_3.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥124</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥1279</div>
                                    <div class="gI_price_msg" id="gI_price_discot">1.1折</div>
                                </div>
                                <div class="goodsItems_name">秋新款撞色字母牙刷绣连帽长款一衣两穿卫衣连衣裙</div>
                            </div>
                        </div>
                    </div>
                    <div class="gline_goodBox">
                        <div class="gLine_good" id="gLine_g_last">
                            <img src="./img/goodsTwo/gLine_g_4.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥264</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥1009</div>
                                    <div class="gI_price_msg" id="gI_price_discot">2.7折</div>
                                </div>
                                <div class="goodsItems_name">三十秋新款法式风情珍珠装饰单排扣针织连衣裙</div>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- 第三行 -->
                <div class="goodsLine_three">
                    <div class="gline_goodBox">
                        <div class="gLine_good">
                            <img src="./img/goodsThree/gLine_g_1.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥364</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥1569</div>
                                    <div class="gI_price_msg" id="gI_price_discot">2.7折</div>
                                </div>
                                <div class="goodsItems_name">三十而已同款连衣裙女夏2020新款休闲方领姐姐时髦衣橱女士裙子</div>
                            </div>
                        </div>
                    </div>

                    <div class="gline_goodBox">
                        <div class="gLine_good">
                            <img src="./img/goodsThree/gLine_g_2.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥264</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥1009</div>
                                    <div class="gI_price_msg" id="gI_price_discot">2.7折</div>
                                </div>
                                <div class="goodsItems_name">【2020秋装新品】时尚休闲减龄经典宽松拼接格子长袖连衣裙女</div>
                            </div>
                        </div>
                    </div>
                    <div class="gline_goodBox">
                        <div class="gLine_good">
                            <img src="./img/goodsThree/gLine_g_3.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥64</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥669</div>
                                    <div class="gI_price_msg" id="gI_price_discot">1.0折</div>
                                </div>
                                <div class="goodsItems_name">三十而已同款连衣裙女夏季2020新款休闲短袖姐姐时髦衣橱女士裙子</div>
                            </div>
                        </div>
                    </div>
                    <div class="gline_goodBox">
                        <div class="gLine_good" id="gLine_g_last">
                            <img src="./img/goodsThree/gLine_g_4.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥131</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥1109</div>
                                    <div class="gI_price_msg" id="gI_price_discot">2.1折</div>
                                </div>
                                <div class="goodsItems_name">【2020秋】大牌设计感宽松显瘦裙子女式百褶裙时尚灯笼袖连衣裙</div>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- 第四行 -->
                <div class="goodsLine_four">
                    <div class="gline_goodBox">
                        <div class="gLine_good">
                            <img src="./img/goodsFour/gLine_g_1.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥264</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥1009</div>
                                    <div class="gI_price_msg" id="gI_price_discot">2.7折</div>
                                </div>
                                <div class="goodsItems_name">【2020秋装新品】时尚休闲减龄经典宽松拼接格子长袖连衣裙女</div>
                            </div>
                        </div>
                    </div>

                    <div class="gline_goodBox">
                        <div class="gLine_good">
                            <img src="./img/goodsFour/gLine_g_2.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥264</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥1009</div>
                                    <div class="gI_price_msg" id="gI_price_discot">2.4折</div>
                                </div>
                                <div class="goodsItems_name">20秋新款复古时尚小香风撞色娃娃领假两件长袖连衣裙女裙子</div>
                            </div>
                        </div>
                    </div>
                    <div class="gline_goodBox">
                        <div class="gLine_good">
                            <img src="./img/goodsFour/gLine_g_3.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥264</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥1009</div>
                                    <div class="gI_price_msg" id="gI_price_discot">2.7折</div>
                                </div>
                                <div class="goodsItems_name">【2020秋装新品】时尚休闲减龄经典宽松拼接格子长袖连衣裙女</div>
                            </div>
                        </div>
                    </div>
                    <div class="gline_goodBox">
                        <div class="gLine_good" id="gLine_g_last">
                            <img src="./img/goodsFour/gLine_g_4.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥164</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥689</div>
                                    <div class="gI_price_msg" id="gI_price_discot">2.5折</div>
                                </div>
                                <div class="goodsItems_name">【中餐厅同款】2020夏新品学院风X型拼接翻领织带女式连衣裙</div>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- 第五行 -->
                <div class="goodsLine_five">
                    <div class="gline_goodBox">
                        <div class="gLine_good">
                            <img src="./img/goodsFive/gLine_g_1.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥264</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥1009</div>
                                    <div class="gI_price_msg" id="gI_price_discot">2.7折</div>
                                </div>
                                <div class="goodsItems_name">【20秋季新款重工款拼接蕾丝荷叶边喇叭袖收腰连衣裙</div>
                            </div>
                        </div>
                    </div>

                    <div class="gline_goodBox">
                        <div class="gLine_good">
                            <img src="./img/goodsFive/gLine_g_2.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥74</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥609</div>
                                    <div class="gI_price_msg" id="gI_price_discot">2.7折</div>
                                </div>
                                <div class="goodsItems_name">【2020年秋季新品】时尚休闲简约英伦风舒适工装军旅气质连衣裙</div>
                            </div>
                        </div>
                    </div>
                    <div class="gline_goodBox">
                        <div class="gLine_good">
                            <img src="./img/goodsFive/gLine_g_3.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥264</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥1009</div>
                                    <div class="gI_price_msg" id="gI_price_discot">2.7折</div>
                                </div>
                                <div class="goodsItems_name">女款韩版休闲圆领宽松运动风条纹撞色短袖连衣裙</div>
                            </div>
                        </div>
                    </div>
                    <div class="gline_goodBox">
                        <div class="gLine_good" id="gLine_g_last">
                            <img src="./img/goodsFive/gLine_g_4.png" alt="">
                            <div class="mti_into">立即购买</div>
                            <div class="gLine_g_bottom">
                                <div class="goodsItems_price">
                                    <div class="gI_price_msg" id="gI_price_title">折后价</div>
                                    <div class="gI_price_msg" id="gI_price_now">￥424</div>
                                    <div class="gI_price_msg" id="gI_price_before">￥1509</div>
                                    <div class="gI_price_msg" id="gI_price_discot">1.7折</div>
                                </div>
                                <div class="goodsItems_name">【秋装新品上新】2020年气质花边袖休闲宽松拼色舒适连衣裙女</div>
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
        methods:{
            buy(){
                this.$router.push('/details')
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

    .gLine_good:hover .mti_into{
        top: 70px;
        transition: all .6s;
    }

    .gLine_good:hover img{
        opacity: 0.8;
    }

    /*款式展示主体内容*/
    .goodsItems{
        height: 1920px;
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
        font-size: 12px;
        color: #666;
        line-height: 18px;
        margin-bottom: 8px;
    }

    .goodsLine_two, .goodsLine_three, .goodsLine_four, .goodsLine_five{
        clear: both;
    }

</style>
