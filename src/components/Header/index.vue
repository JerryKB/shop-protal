<template>
    <div class="top">
        <div class="left">
            <span>广州市</span>
            <span>></span>
        </div>
        <div class="right">
            <ul>
                <li>
                    <span v-if="user==null" @click="toLogin">请登录</span>
                    <span v-if="user!=null" class="welcome">欢迎&nbsp;&nbsp;{{user.username}}</span>
                    <em>/</em>
                </li>
                <li>
                    <span @click="toRegistry">注册</span>
                    <em>/</em>
                </li>
                <li>
                    <span>签到有礼</span>
                    <em>/</em>
                </li>
                <li>
                    <span @click="toOrder">我的订单</span>
                    <em>/</em>
                </li>
                <li>
                    <span>我的特卖</span>
                    <em>/</em>
                </li>
                <li>
                    <span>会员俱乐部</span>
                    <em>/</em>
                </li>
                <li>
                    客户服务
                    <em>/</em>
                </li>
                <li>
                    <span>手机版</span>
                    <em>/</em>
                </li>
                <li>
                    <span>更多</span>
                    <em>/</em>
                </li>
            </ul>

        </div>


    </div>

</template>

<script>
    export default {
        name: "header-index",
        data(){
            return{
                user:null
            }
        },
        mounted() {


        },
        methods:{
            toLogin(){
                this.$router.push('/login')
            },
            toRegistry(){
                this.$router.push('/registry')

            },
            toOrder(){
                this.$router.push('/order')
            }
        }
    }
</script>

<style scoped>
    span:hover{
        cursor: pointer;
    }
    .top{
        font-size: 10px;
        position: relative;
        height: 30px;
        line-height: 30px;
        background-color: #f5f5f5;
    }
    .top .left{
        position: absolute;
        left:240px ;
    }
    .top .right{
        position: absolute;
        right: 140px;
    }
    .top .right ul li{
        float: left;
        padding-left: 10px;
        padding-right: 10px;
    }
    .top .right ul li em{
        display: inline-block;
        margin-left: 15px;
        color: #dadada;
        font-style: italic;
    }

</style>
