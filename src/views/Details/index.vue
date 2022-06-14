<template>
    <div class="outer">
        <!-- 主要内容区域 -->
        <section class="con">
            <!-- 导航路径区域 -->
            <div class="conPoin">
                <div class="conPoin">
                    <a href="###">手机、数码、通讯</a>
                    <a href="###">手机</a>
                    <a href="###">Apple苹果</a>
                    <a>iphone 6S系类</a>
                </div>
            </div>
            <!-- 主要内容区域 -->
            <div class="mainCon">
                <!-- 左侧放大镜区域 -->
                <div class="previewWrap">
                    <!--放大镜效果-->
                    <div class="preview">
                        <div class="jqzoom">
                            <img src="./images/s1.png" />
                            <div class="mask"></div>

                        </div>
                        <div class="maxbox">
                            <img src="./images/s1.png">
                        </div>
                    </div>
                    <!--下方的缩略图-->
<!--                    <div class="specScroll">-->
<!--                        &lt;!&ndash;左按钮&ndash;&gt;-->
<!--                        <a class="prev">&lt;</a>-->
<!--                        &lt;!&ndash; 中间可滑动区域 &ndash;&gt;-->
<!--                        <div class="items">-->
<!--                            <div class="itemsCon">-->

<!--                            </div>-->
<!--                        </div>-->
<!--                        &lt;!&ndash;右按钮&ndash;&gt;-->
<!--                        <a class="next">&gt;</a>-->
<!--                    </div>-->

                </div>
                <!-- 右侧选择区域布局 -->
                <div class="InfoWrap">
                    <div class="goodsDetail">
                        <h3 class="InfoName">${goodsCon.title}</h3>
                        <p class="news">${goodsCon.recommend}</p>
                        <div class="priceArea">
                            <div class="priceArea1">
                                <div class="title">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</div>
                                <div class="price">
                                    <i>¥</i>
                                    <em>${goodsCon.price}</em>
                                    <span>降价通知</span>
                                </div>
                                <div class="remark">
                                    <i>累计评价</i>
                                    <em>${goodsCon.evaluateNum}</em>
                                </div>
                            </div>
                            <div class="priceArea2">
                                <div class="title">
                                    <i>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</i>
                                </div>
                                <div class="fixWidth">
                                    <i class="red-bg">苹果手机</i>
                                    <em
                                            class="t-gray">苹果手6+128g机</em>
                                </div>
                            </div>
                        </div>
                        <div class="support">
                            <div class="supportArea">
                                <div class="title">支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</div>
                                <div class="fixWidth">顺丰</div>
                            </div>
                            <div class="supportArea">
                                <div class="title">配 送 至</div>
                                <div class="fixWidth">xxxx</div>
                            </div>
                        </div>

                    </div>

                    <div class="choose">
                        <div class="chooseArea">
                            <div class="choosed"></div>
                        </div>

                        <div class="cartWrap">
                            <div class="controls">
                                <input autocomplete="off" value="1" class="itxt" />
                                <a href="###" class="plus">+</a>
                                <a href="###" class="mins">-</a>
                            </div>
                            <div class="add">
                                <a href="###">加入购物车</a>
                            </div>
                            <div class="add" style="margin-left: 10px">
                                <a @click="buy" href="#">立即购买</a>
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
                        <ul class="partList">
                            <li>手机</li>
                            <li>手机壳</li>
                            <li>内存卡</li>
                            <li>Iphone配件</li>
                            <li>贴膜</li>
                            <li>手机耳机</li>
                            <li>移动电源</li>
                            <li>平板电脑</li>
                        </ul>
                        <ul class="goodsList">
                            <li>
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/part01.png" />
                                    </div>
                                    <div class="attr">Apple苹果iPhone 6s (A1699) </div>
                                    <div class="price">
                                        <em>¥</em>
                                        <i>6088.00</i>
                                    </div>
                                    <div class="operate">
                                        <a href="javascript:void(0);">加入购物车</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/part02.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="operate">
                                        <a href="javascript:void(0);">加入购物车</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/part03.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="operate">
                                        <a href="javascript:void(0);">加入购物车</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/part02.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="operate">
                                        <a href="javascript:void(0);">加入购物车</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/part03.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>6088.00</i>
                                        </strong>
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
                            <ul class="goods-intro">
                                <li>分辨率：1920*1080(FHD)</li>
                                <li>后置摄像头：1200万像素</li>
                                <li>前置摄像头：500万像素</li>
                                <li>核 数：其他</li>
                                <li>频 率：以官网信息为准</li>
                                <li>品牌： Apple</li>
                                <li>商品名称：APPLEiPhone 6s Plus</li>
                                <li>商品编号：1861098</li>
                                <li>商品毛重：0.51kg</li>
                                <li>商品产地：中国大陆</li>
                                <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                                <li>系统：苹果（IOS）</li>
                                <li>像素：1000-1600万</li>
                                <li>机身内存：64GB</li>
                            </ul>
                            <div class="intro-detail">
                                <img src="./images/intro01.png" />
                                <img src="./images/intro02.png" />
                                <img src="./images/intro03.png" />
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

        <!-- 猜你喜欢 -->
        <div class="like">
            <h4 class="kt">猜你喜欢</h4>
            <ul class="like-list">
                <li class="likeItem">
                    <div class="p-img">
                        <img src="./images/itemlike01.png" />
                    </div>
                    <div class="attr">
                        <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                    </div>
                    <div class="price">
                        <em>¥</em>
                        <i>3699.00</i>
                    </div>
                    <div class="commit">已有6人评价
                    </div>
                </li>\
                <li class="likeItem">
                    <div class="p-img">
                        <img src="./images/itemlike02.png" />
                    </div>
                    <div class="attr">
                        Apple苹果iPhone 6s/6s Plus 16G 64G 128G
                    </div>
                    <div class="price">
                        <em>¥</em>
                        <i>4388.00</i>
                    </div>
                    <div class="commit">已有700人评价
                    </div>
                </li>
                <li class="likeItem">
                    <div class="p-img">
                        <img src="./images/itemlike03.png" />
                    </div>
                    <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本
                    </div>
                    <div class="price">
                        <em>¥</em>
                        <i>4088.00</i>
                    </div>
                    <div class="commit">已有700人评价
                    </div>
                </li>
                <li class="likeItem">
                    <div class="p-img">
                        <img src="./images/itemlike04.png" />
                    </div>
                    <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本
                    </div>
                    <div class="price">
                        <em>¥</em>
                        <i>4088.00</i>
                    </div>
                    <div class="commit">已有700人评价
                    </div>
                </li>
                <li class="likeItem">
                    <div class="p-img">
                        <img src="./images/itemlike05.png" />
                    </div>
                    <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本
                    </div>
                    <div class="price">
                        <em>¥</em>
                        <i>4088.00</i>
                    </div>
                    <div class="commit">已有700人评价
                    </div>
                </li>
                <li class="likeItem">
                    <div class="p-img">
                        <img src="./images/itemlike06.png" />
                    </div>
                    <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本
                    </div>
                    <div class="price">
                        <em>¥</em>
                        <i>4088.00</i>
                    </div>
                    <div class="commit">已有700人评价
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>

    export default {
        name: "detail-index",
        data(){
            return{
                active:[
                    {name:'active'},{name:''},{name:''},{name:''}],
            }
        },
        mounted() {
            this.amplify();


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
                console.log(this.active)

            },
            buy(){
                this.$router.push('/subOrder')
            }


        }


    }



</script>

<style scoped>
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
        float: left;
        margin-right: 5px;
        color: #666;
        line-height: 24px;
        padding: 2px 14px;
        border-top: 1px solid #eee;
        border-right: 1px solid #bbb;
        border-bottom: 1px solid #bbb;
        border-left: 1px solid #eee;
    }
    .outer .con .mainCon .InfoWrap .choose .chooseArea dl dd:nth-of-type(1) {
        color: red;
    }
    .outer .con .mainCon .InfoWrap .choose .cartWrap .controls {
        width: 48px;
        position: relative;
        float: left;
        margin-right: 15px;
    }
    .outer .con .mainCon .InfoWrap .choose .cartWrap .controls .itxt {
        width: 38px;
        height: 37px;
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
        padding: 0 15px;
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
