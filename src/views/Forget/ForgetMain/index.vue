<template>
    <div class="register-container">
        <!-- 忘记密码 -->
        <div class="register">
            <h3>忘记密码
                <span class="go"> 去 <a class="toLogin" @click="toLogin">登陆</a>
        </span>
            </h3>
            <div class="content">
                <label>邮箱账号:</label>
                <input v-model="form.email" type="text" placeholder="请输入你的邮箱账号" @blur="validateMail">
                <span ref="email" class="error-msg">请输入正确的邮箱账号</span>
            </div>
            <div class="content">
                <label>验证码:</label>
                <input type="text" placeholder="请输入验证码">
                <span class="error-msg">请输入正确的验证码</span>
            </div>
            <div class="content">
                <label>新密码:</label>
                <input type="text" placeholder="请输入你的登录密码">
                <span class="error-msg">请输入密码</span>
            </div>
            <div class="content">
                <label>确认密码:</label>
                <input type="text" placeholder="请输入确认密码">
                <span class="error-msg">两次输入的密码不匹配</span>
            </div>
            <div class="btn">
                <button>完成修改</button>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "forget-main-index",
        data(){
          return {
              form:{
                  email:'',
              }


          }
        },
        methods:{
            validateMail(){

            },
            toLogin(){
                this.$router.push('/login')
            }
        }

    }
</script>

<style scoped>
    .register {
        width: 1200px;
        height: 445px;
        border: 1px solid #dfdfdf;
        margin: 0 auto;
    }
    .register h3 {
        background: #ececec;
        margin: 0;
        padding: 6px 15px;
        color: #333;
        border-bottom: 1px solid #dfdfdf;
        font-size: 20.04px;
        line-height: 30.06px;
    }
    .register h3 span {
        font-size: 14px;
        float: right;
    }
    .register h3 span a {
        color: #f10180;
    }
    .register h3 span a:hover {
        cursor: pointer;
    }
    .register div:nth-of-type(1) {
        margin-top: 40px;
    }
    .register .content {
        padding-left: 390px;
        margin-bottom: 18px;
        position: relative;
    }
    .register .content label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
    }
    .register .content input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
    }
    .register .content img {
        vertical-align: sub;
    }
    .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        font-size: 10px;
        color: red;
    }
    .register .controls {
        text-align: center;
        position: relative;
    }
    .register .controls input {
        vertical-align: middle;
        margin-right: 5px;
        cursor: pointer;
    }
    .register .controls .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
    }
    .register .btn {
        text-align: center;
        line-height: 36px;
        margin: 17px 0 0 55px;
    }
    .register .btn button {
        outline: none;
        width: 270px;
        height: 36px;
        border: none;
        background: #f10180;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
    }
    .register .btn button:hover{
        cursor: pointer;
    }
    .error-msg{
        display: none;
    }


</style>
