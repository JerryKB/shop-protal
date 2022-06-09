<template>
    <div class="footer">
        <div class="footer_top">
        </div>
        <div class="footer_bottom">
            <div class="footer_list">
                <dl class="footer_list_dl">
                    <dt>服务保障</dt>
                    <dd><a href="#"><div class="dot"></div>正品保证</a></dd>
                    <dd><a href="#"><div class="dot"></div>7天无理由放行退</a></dd>
                    <dd><a href="#"><div class="dot"></div>7X15小时客户服务</a></dd>
                    <dd><a href="#"><div class="dot"></div>7天无理由随心换</a></dd>
                </dl>
                <dl class="footer_list_dl">
                    <dt>购物指南</dt>
                    <dd><a href="#"><div class="dot"></div>导购演示</a></dd>
                    <dd><a href="#"><div class="dot"></div>订单操作</a></dd>
                    <dd><a href="#"><div class="dot"></div>会员注册</a></dd>
                    <dd><a href="#"><div class="dot"></div>帐户管理</a></dd>
                    <dd><a href="#"><div class="dot"></div>收货样品</a></dd>
                    <dd><a href="#"><div class="dot"></div>会员等级</a></dd>
                </dl>
                <dl class="footer_list_dl">
                    <dt>支付方式</dt>
                    <dd><a href="#"><div class="dot"></div>23家主流网银支付</a></dd>
                    <dd><a href="#"><div class="dot"></div>支付宝、银联等支付</a></dd>
                    <dd><a href="#"><div class="dot"></div>信用卡支付</a></dd>
                    <dd><a href="#"><div class="dot"></div>零钱支付</a></dd>
                </dl>
                <dl class="footer_list_dl">
                    <dt>配送方式</dt>
                    <dd><a href="#"><div class="dot"></div>配送范围及运费</a></dd>
                    <dd><a href="#"><div class="dot"></div>验货与签收</a></dd>

                </dl>
                <dl class="footer_list_dl">
                    <dt>售后服务</dt>
                    <dd><a href="#"><div class="dot"></div>退货政策</a></dd>
                    <dd><a href="#"><div class="dot"></div>退货流程</a></dd>
                    <dd><a href="#"><div class="dot"></div>退款方式和时效</a></dd>
                    <dd><a href="#"><div class="dot"></div>换货服务</a></dd>
                </dl>
                <dl class="tc">
                    <dt>唯品会二维码</dt>
                    <dd>
                        <img src="./img/footer_side.jpg">
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .footer{

        margin-top:50px;
        height: 300px;
        border-top: 1px solid rgb(205, 192, 192);
        background-color: #dad7d744;
        overflow: hidden;
    }
    .footer .footer_top{
        height: 60px;
        width: 795px;
        margin: 0 auto;
        margin-top: 30px;
        background-color: red;
        background: url(./img/footer_top.png);
    }
    .footer .footer_bottom{
        margin: 0 auto;
        width: 1080px;
        height: 400px;
        /* background-color: #f00581; */
    }
    .footer .footer_bottom dl{
        float: left;
        font-size: 10px;
        width: 140px;
        height: 140px;
        padding: 0 4px 0 30px;
        border-right:1px solid #e0e0e0;
    }
    .footer .footer_bottom .footer_list_dl dt{
        font-size: 9px;
    }
    .footer .footer_bottom .footer_list_dl dd a{
        color:#848484 ;
    }
    .footer .footer_bottom .footer_list_dl dd a .dot{
        float: left;
        margin-top: 6px;
        margin-right: 5px;
        border: 1px solid black;
        height: 2px;
        width: 2px;
        background-color: #6a6b6d;
        opacity: .6;
    }
    .footer .footer_bottom .tc{
        font-size: 10px;
    }
    .footer .footer_bottom .tc dt{
        text-align: center;

    }
    .footer .footer_bottom .tc dd{
        margin-left: 18px;
    }
    .footer .footer_bottom .tc dd img{
        height: 100px;
    }


</style>
