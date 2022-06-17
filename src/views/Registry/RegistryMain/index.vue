<template>
    <div class="register-container">
        <!-- 注册内容 -->
        <div class="register">
            <h3>注册新用户
                <span class="go">我有账号，去 <a href="javascript:void(0)" @click="toLogin">登陆</a>
        </span>
            </h3>
            <div class="content">
                <label>邮箱账号:</label>
                <input v-model="form.email" type="text" placeholder="请输入你的邮箱账号" @blur="validateMail">
                <span ref="email" class="error-msg">请输入正确的邮箱账号</span>
            </div>
            <div class="content">
                <label>用户名:</label>
                <input type="text" @blur="checkUsername" v-model="form.username" placeholder="请输入用户名">
                <span class="error-msg">该用户名已存在，请重新输入</span>
                <span ref="confirmUsername" class="error-msg">请输入用户名</span>
            </div>
            <div class="content">
                <label>真实姓名:</label>
                <input type="text" @blur="checkName" v-model="form.real_name" placeholder="请输入真实姓名">
                <span ref="confirmName" class="error-msg">请输入姓名</span>
            </div>
            <div class="content">
                <label>登录密码:</label>
                <input type="password" @blur="isPassword" v-model="form.password" placeholder="请输入你的登录密码">
                <span ref="passwordR" class="error-msg">请输入密码</span>
            </div>
            <div class="content">
                <label>确认密码:</label>
                <input  @blur="checkPassword" v-model="confirmPassword" type="password" placeholder="请输入确认密码">
                <span ref="password2" class="error-msg">两次输入的密码不匹配</span>
            </div>
            <div class="controls">
                <input name="m1" type="checkbox" v-model="m1">
                <span>同意协议并注册《唯品会用户协议》</span>
                <span ref="checkBox" class="error-msg">请勾选同意用户协议</span>
            </div>
            <div class="btn">
                <button @click="registry">完成注册</button>
            </div>
        </div>


    </div>
</template>

<script>

    export default {
        name: 'registry-main-index',
        data(){
            return{
                m1:'',
                confirmPassword:'',
                form:{

                    real_name:'',
                    email:'',
                    username:'',
                    password:'',

                }
            }
        },
        methods:{
            validateMail(){
                let rex=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
            if (!rex.test(this.form.email)){
                this.$refs.email.style.display = 'block';
            }
            else{
                this.$refs.email.style.display = 'none';
            }
            },
            isPassword(){
                if (this.form.password===null||this.form.password===''){
                    this.$refs.passwordR.style.display='block'
                }
                else {
                    this.$refs.passwordR.style.display='none'
                }
            },
            checkPassword(){
                if (this.form.password!==this.confirmPassword){
                    this.$refs.password2.style.display='block';

                }else{
                    this.$refs.password2.style.display='none';
                }

            },
            toLogin(){
                this.$router.push('/login')
            },
            registry(){
                if (!this.m1){
                    this.$refs.checkBox.style.display='block'
                    return
                }
                this.$refs.checkBox.style.display='none'
                this.postRequest('/user/registry',this.form).then(data=>{
                    if (data.code===200){
                        this.$message({
                            message: '注册成功',
                            type: 'success'
                        });
                        this.$router.push('/login')
                    }else{
                        this.$message.error("用户名已存在")
                    }
                })
            },
            checkName(){
                if (this.form.real_name===null||this.form.real_name===''){
                    this.$refs.confirmName.style.display='block'
                }else {
                    this.$refs.confirmName.style.display='none'
                }
            },
            checkUsername(){
                if (this.form.username===null||this.form.username===''){
                    this.$refs.confirmUsername.style.display='block'
                }else{
                    this.$refs.confirmUsername.style.display='none'
                }
            }
        }

    }
//    /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
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
        color: #e1251b;
    }
    .register h3 span a:hover{
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
    .error-msg{
        display: none;
    }


</style>
