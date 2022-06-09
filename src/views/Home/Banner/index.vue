<template>
    <div class="img_ps">
        <div class="img_scroll">
            <div class="img_scroll_top">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="./img/img_scroll1.jpg"></div>
                        <div class="swiper-slide"><img src="./img/img_scroll2.jpg"></div>
                        <div class="swiper-slide"><img src="./img/img_scroll3.jpg"></div>

                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                </div>
                <div class="top_left left_right">&lt;</div>
                <div class="top_right left_right">&gt;</div>
            </div>
            <div class="img_scroll_bottom">
                <span>
                    罗莱生活 套件139元起
                    <em>|</em>
                </span>
                <span>
                    罗莱生活 套件139元起
                    <em>|</em>
                </span>
                <span>
                    罗莱生活 套件139元起
                    <em>|</em>
                </span>
            </div>
        </div>
    </div>


</template>

<script>
    import Swiper from "swiper";
    import "swiper/css/swiper.min.css";
    export default {
        name: "banner-index",
        mounted() {
            new Swiper(".swiper-container", {
                // direction: "vertical", // 垂直切换选项
                loop: true, // 循环模式选项
                autoplay:{
                    delay:3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',//自动隐藏
                    clickable :true,
                },
                speed:1000,

                // 如果需要前进后退按钮
                navigation: {
                    nextEl: ".top_right",
                    prevEl: ".top_left",
                },
            });
        },
    }
</script>

<style scoped>
    .swiper-container{
        height: 100%;
        width: 100%;
    }
    .img_ps{
        background: url(img/img_ps.jpg) no-repeat center;
        height: 500px;
        overflow: hidden;
    }
    .img_ps .img_scroll{
        margin: 34px auto;
        width: 1142px;
        height: 445px;
        padding: 10px 10px;
        background-color: rgba(255,255,255,.86);

    }
    .img_ps .img_scroll .img_scroll_top{
        position: relative;

        /*background: url(img/img_scroll1.jpg);*/
        height: 400px;
    }
    .img_ps .img_scroll .img_scroll_bottom{

        height: 40px;
        text-align: center;
        line-height: 40px;
    }
    .img_ps .img_scroll .img_scroll_bottom span{
        display: inline-block;
        font-size: 12px;
        text-align: center;

        padding-left: 35px;
    }
    .img_ps .img_scroll .img_scroll_bottom span em{
        color: #ece8e8;
        padding-left: 35px;
    }
    .img_ps .img_scroll .img_scroll_bottom span:hover{
        cursor: pointer;
        border-bottom: 3px solid #f00581;
    }
    .img_ps .img_scroll .img_scroll_top .left_right{
        position: absolute;
        z-index: 5;
        height: 70px;
        width: 30px;
        line-height: 70px;
        text-align: center;
        font-size: 25px;
        background-color: grey;
        border-radius: 4px;
        top: 165px;
        opacity: 0.5;

    }
    .img_ps .img_scroll .img_scroll_top .top_left{
        display: none;
    }
    .img_ps .img_scroll .img_scroll_top .top_right{
        display: none;
        right: 0;

    }
    .img_ps .img_scroll .img_scroll_top:hover .top_right{
        display: block;
    }
    .img_ps .img_scroll .img_scroll_top:hover .top_left{
        display: block;
    }
    .img_ps .img_scroll .img_scroll_top .top_left:hover{
        cursor: pointer;
        color: #ffffff;
    }
    .img_ps .img_scroll .img_scroll_top .top_right:hover{
        cursor: pointer;
        color: #ffffff;
    }

</style>
