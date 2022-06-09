<template>
    <div class="logoAndInput">
        <div class="logo">
            <img src="./img/logo.png">
        </div>
        <span class="minLogo"></span>

        <div class="input">
            <input type="text" class="search" placeholder="女式T恤" autofocus>
            <button class="input_btn iconfont icon-icon-test"></button>
            <div class="input_down">
                <a href="#">
                    女式T恤
                    <em>|</em>

                </a>
                <a href="#">
                    女式休闲裤
                    <em>|</em>
                </a>
                <a href="#">
                    女休闲鞋
                    <em>|</em>
                </a>
                <a href="#">
                    耐克Nike
                    <em>|</em>
                </a>
                <a href="#">
                    护肤套装
                    <em>|</em>
                </a>
                <a href="#">
                    男式T恤
                    <em>|</em>
                </a>
            </div>
        </div>


        <div class="shopping">
            <span class="iconfont icon-24gl-bag bag">
                <i>购物车</i>
                <span class="dot">0</span>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search-index"
    }
</script>

<style scoped>
    .logoAndInput{
        position: relative;
        height: 100px;
        width: 1512px;
        margin: 0 auto;

    }
    .logoAndInput .logo{
        position: absolute;
        width: 160px;
        left: 200px;
    }
    .logoAndInput .logo img{
        height: 100px;
    }
    .logoAndInput .minLogo{
        position: absolute;
        display: inline-block;
        height: 100px;
        width: 605px;
        background: url(./img/logoSide.jpg) 50% 50% no-repeat;
        background-size: 50%;
        left: 230px;
    }
    .logoAndInput .input{
        position: absolute;
        height: 58px;
        top: 32px;
        right: 300px;
        width: 428px;

    }
    .logoAndInput .input .search{
        border: 2px solid #fa2a83;
        width: 400px;
        height: 20px;
        padding: 5px 12px;

    }

    .logoAndInput .input .input_down a{
        display: inline-block;
        margin-left: 2px;
        font-size: 5px;
        color: #999ba3;
    }
    .logoAndInput .input .input_down em{
        margin: 0 5px;
    }
    .logoAndInput .input_btn{
        position: absolute;
        top: 1px;
        right: 0;
        height: 32px;
        width: 50px;
        background-color: #fa2a83;
        border: 0;
        color: #f5f5f5;
        font-size: 25px;
    }
    .logoAndInput .shopping{
        position: absolute;
        top: 31px;
        right: 180px;
        height: 35px;
        width: 90px;
        padding: 0 5px;
        line-height: 35px;
        border: 1px solid #cccccc;
        background-color: #f6f7f9;
    }
    .logoAndInput .shopping .bag{
        display: inline-block;
        font-size: 22px;
    }
    .logoAndInput .shopping .bag i{
        font-size: 11px;
        vertical-align: middle;

    }
    .logoAndInput .shopping .bag .dot {
        position: absolute;
        margin-top: 1px;
        font-size: 11px;
        height: 15px;
        width: 20px;
        background-color: #f00581;
        line-height: 15px;
        text-align: center;
        border-radius: 7.5px;
        color: #f5f5f5;
        top: 12px;
        right: 7px;

    }

</style>
