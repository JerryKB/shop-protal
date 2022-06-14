<template>
    <div class="nav">
        <div class="sort">
            商品分类
            <ul>
                <li>
                    女装/男装/内衣
                    <div class="nav_detail">
                        <dl class="fore">
                            <dt>
                                <a href="">电子书</a>
                            </dt>
                            <dd>
                                <em>
                                    <a href="">免费</a>
                                </em>
                                <em>
                                    <a href="">小说</a>
                                </em>
                                <em>
                                    <a href="">励志与成功</a>
                                </em>
                                <em>
                                    <a href="">婚恋/两性</a>
                                </em>
                                <em>
                                    <a href="">文学</a>
                                </em>
                                <em>
                                    <a href="">经管</a>
                                </em>
                                <em>
                                    <a href="">畅读VIP</a>
                                </em>
                            </dd>
                        </dl>
                    </div>
                </li>

                <li>女装/男装/内衣
                    <div class="nav_detail"></div>
                </li>
                <li>女装/男装/内衣
                    <div class="nav_detail"></div>
                </li>
                <li>女装/男装/内衣
                    <div class="nav_detail"></div>
                </li>
                <li>女装/男装/内衣
                    <div class="nav_detail"></div>
                </li>
                <li>女装/男装/内衣
                    <div class="nav_detail"></div>
                </li>
                <li>女装/男装/内衣
                    <div class="nav_detail"></div>
                </li>
                <li>女装/男装/内衣
                    <div class="nav_detail"></div>
                </li>
            </ul>


        </div>

        <div class="minNav">
            <a href="#">推荐</a>
            <a href="#">3折疯抢</a>
            <a href="#">唯品快抢</a>
            <a href="#">唯品奥莱</a>
            <a href="#">女装</a>
            <a href="#">鞋包</a>
            <a href="#">运动</a>
            <a href="#">母婴</a>
            <a href="#">美妆</a>
            <a href="#">男装</a>
            <a href="#">电器</a>
            <a href="#">内衣</a>
            <a href="#" class="more">
                更多
            </a>

        </div>
    </div>
</template>

<script>
    export default {
        name: "nav-index"
    }
</script>

<style scoped>
    .nav{
        position: relative;
        height: 42px;
        line-height: 42px;
        text-align: center;
        z-index: 3;

    }
    .nav .sort{
        position: absolute;
        left: 220px;
        width: 120px;
        height: 42px;
        background-color: #fa2a83;
        color: #ffffff;
        z-index: 2;
    }
    /* 抽屉打开（完成） */
    .nav .sort ul{
        display: none;
        background-color: #f00581;
    }
    .nav .sort:hover ul{
        display: block;
        overflow: hidden;
        animation-name:open;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;

    }
    @keyframes open{
        0%{
            opacity: 0;

            visibility: hidden;
           height: 0;


        }
        100%{
            opacity: 1;
            height: 411px;
            visibility: visible !important;

        }
    }
    .nav  .sort .nav_detail{
        position: absolute;
        top: 42px;
        left: 0;
        border-top: 1px solid #f4f4f4;
        margin-left: 120px;
        height: 400px;
        width: 800px;
        padding: 5px 15px;
        background-color: #ffffff;
        display: none;

    }
    .nav .sort ul li:hover .nav_detail{
        display: block;
    }
    .nav .sort ul li:hover{
        background-color: #ffffff;
        color:#f00581;
    }
    .nav .minNav{
        position:absolute;
        height: 100%;
        left: 380px;
    }
    .nav .minNav a{
        display: inline-block;
        padding: 0 15px;
        font-size: 14px;
    }
    .nav .minNav a:hover{
        color: #f00581;
    }

    .nav .minNav a:first-child{
        color: #f00581;
        font-weight: 600;
    }
    .nav_detail .fore {
        border-top: 0;
        font-size: 15px;
    }
    .nav_detail dl dt{
        float: left;
        width: 54px;
        line-height: 22px;
        text-align: right;
        padding: 3px 6px 0 0;
        font-weight: 600;
    }
    .nav_detail dl dd{
        float: left;
        width: 600px;
        padding: 3px 0 0;
        overflow: hidden;
    }
    .nav_detail dl em{
        float: left;
        height: 14px;
        line-height: 14px;
        padding: 0 8px;
        margin-top: 5px;
        border-left: 1px solid #ccc;

    }

</style>
