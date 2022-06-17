<template>

    <div class="shop_sort">
        <div class="item">
            <a href="#">
                <img src="./img/sort_item1.jpg">
            </a>
            <div class="sort_detail">
                <span class="discount">4.9</span>
                <span class="dw">折起</span>
                <span class="sort_detail_title">魅可MAC彩妆香水专场</span>
            </div>
        </div>
        <div class="item">
            <a href="#">
                <img src="./img/sort_item2.jpg">
            </a>
            <div class="sort_detail">
                <span class="discount">4.9</span>
                <span class="dw">折起</span>
                <span class="sort_detail_title">魅可MAC彩妆香水专场</span>
            </div>
        </div>
        <div class="item">
            <a href="#">
                <img src="./img/sort_item3.jpg">
            </a>
            <div class="sort_detail">
                <span class="discount">4.9</span>
                <span class="dw">折起</span>
                <span class="sort_detail_title">魅可MAC彩妆香水专场</span>
            </div>
        </div>
        <div class="item">
            <a href="#">
                <img src="./img/sort_item4.jpg">
            </a>
            <div class="sort_detail">
                <span class="discount">4.9</span>
                <span class="dw">折起</span>
                <span class="sort_detail_title">魅可MAC彩妆香水专场</span>
            </div>
        </div>
        <div class="item">
            <a href="#">
                <img src="./img/sort_item5.jpg">
            </a>
            <div class="sort_detail">
                <span class="discount">4.9</span>
                <span class="dw">折起</span>
                <span class="sort_detail_title">魅可MAC彩妆香水专场</span>
            </div>
        </div>
        <div class="item">
            <a href="#">
                <img src="./img/sort_item6.jpg">
            </a>
            <div class="sort_detail">
                <span class="discount">4.9</span>
                <span class="dw">折起</span>
                <span class="sort_detail_title">魅可MAC彩妆香水专场</span>
            </div>
        </div>
        <div class="item">
            <a href="#">
                <img src="./img/sort_item7.jpg">
            </a>
            <div class="sort_detail">
                <span class="discount">4.9</span>
                <span class="dw">折起</span>
                <span class="sort_detail_title">魅可MAC彩妆香水专场</span>
            </div>
        </div>
        <div class="item">
            <a href="#">
                <img src="./img/sort_item.jpg">
            </a>
            <div class="sort_detail">
                <span class="discount">4.9</span>
                <span class="dw">折起</span>
                <span class="sort_detail_title">魅可MAC彩妆香水专场</span>
            </div>
        </div>

<!--        <div class="item">-->
<!--            <a href="#">-->
<!--                <img src="./img/sort_item2.jpg">-->

<!--            </a>-->
<!--            <div class="sort_detail">-->
<!--                <span class="discount">6</span>-->
<!--                <span class="dw">折起</span>-->
<!--                <span class="sort_detail_title">苹果APPLE数码电子专场</span>-->
<!--            </div>-->

<!--        </div>-->
<!--        <template v-for="(a,b) of 8">-->
<!--            <div class="item">-->
<!--                <a href="#">-->
<!--                    <img src="`./img/sort_item${a}.jpg`">-->

<!--                </a>-->
<!--                <div class="sort_detail">-->
<!--                    <span class="discount">6</span>-->
<!--                    <span class="dw">折起</span>-->
<!--                    <span class="sort_detail_title">苹果APPLE数码电子专场</span>-->
<!--                </div>-->
<!--            </div>-->
<!--        </template>-->
    </div>
</template>

<script>

    export default {
        name: "special-product-index"
    }
</script>

<style scoped>
    .shop_sort{
        margin-top: 40px;
        padding: 0 0 0 175px;
        overflow: hidden;
    }
    .shop_sort .item{
        float: left;
        margin-right: 45px;

    }
    .shop_sort .item a img{
        height: 268px;
    }
    .shop_sort .item .sort_detail{

        height: 60px;
        line-height: 60px;
        cursor: pointer;


    }
    .shop_sort .item .sort_detail span{
        float: left;
    }
    .shop_sort .item .sort_detail span:nth-child(1){
        line-height: 56px;
    }
    .shop_sort .item .sort_detail .discount{
        color: #f00581;
        font-size: 25px;
        font-weight: 600;
    }
    .shop_sort .item .sort_detail .dw{
        font-weight: 600;
        font-size: 14px;
    }
    .shop_sort .item .sort_detail .sort_detail_title{
        display: inline-block;
        margin-left: 20px;
        font-weight: 600;
    }


</style>
