<template>
    <div class="top">
        <div class="left">
            <span>广州市</span>
            <span>></span>
        </div>
        <div class="right">
            <ul>
                <li>
                    <span v-if="username==null" @click="toLogin">请登录</span>
                    <span v-if="username!=null" class="welcome">欢迎&nbsp;&nbsp;{{username}}</span>
                    <em>/</em>
                </li>
                <li>
                    <span v-if="username==null" @click="toRegistry">注册</span>
                    <span v-if="username!=null" @click="toLogout">退出登录</span>
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
                username:null,
            }
        },
        mounted() {
            if (JSON.parse(window.sessionStorage.getItem('userInfo'))===null){
                this.username=null;
            }
            else {
                this.username=JSON.parse(window.sessionStorage.getItem('userInfo')).username;
            }
        },
        methods:{
            toLogin(){
                this.$router.push('/login')
            },
            toRegistry(){
                this.$router.push('/registry')

            },
            toOrder(){
                if (JSON.parse(window.sessionStorage.getItem('userInfo'))==null) {
                    this.$router.push('/login')
                }else{
                    this.$router.push('/order')
                }

            },
            toLogout(){
                this.$confirm('是否确定退出?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '退出成功!'
                    });
                    window.sessionStorage.clear();
                    this.username=null;
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '退出失败'
                    });
                });

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
