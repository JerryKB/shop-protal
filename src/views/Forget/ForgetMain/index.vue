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
                <input v-model="form.email" type="text" placeholder="请输入你的邮箱账号" @blur="validateMail"><button ref="btnSend" class="btnUp" @click="send">发送验证码</button>
                <span ref="email" class="error-msg">请输入正确的邮箱账号</span>
            </div>
            <div class="content">
                <label>验证码:</label>
                <input type="text" @blur="checkCode" v-model="code" placeholder="请输入验证码">
                <span ref="codeCheck" class="error-msg">请输入的验证码</span>
            </div>
            <div class="content">
                <label>用户名:</label>
                <input type="text" @blur="checkUsername" v-model="form.username" placeholder="请输入用户名">
                <span ref="usernameCheck" class="error-msg">请输入用户名</span>
            </div>
            <div class="content">
                <label>新密码:</label>
                <input type="password" v-model="form.password" @blur="isPassword" placeholder="请输入你的登录密码">
                <span ref="passwordCheck" class="error-msg">请输入密码</span>
            </div>
            <div class="content">
                <label>确认密码:</label>
                <input type="password" v-model="checkPassword" @blur="Password2Check" placeholder="请输入确认密码">
                <span ref="password2" class="error-msg">两次输入的密码不匹配</span>
            </div>
            <div class="btn">
                <button @click="finish">完成修改</button>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "forget-main-index",
        data(){
          return {
              checkPassword:'',
              code:'',
              form:{
                  email:'',
                  username:'',
                  password:''
              }


          }
        },
        mounted() {
            if (this.form.email===''){
                this.$refs.btnSend.style.cursor='not-allowed';
            }
        },
        methods:{
            validateMail(){
                let rex=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
                if (!rex.test(this.form.email)){
                    this.$refs.email.style.display = 'block';
                    this.$refs.btnSend.style.cursor='not-allowed';
                    return false
                }
                else{
                    this.$refs.email.style.display = 'none';
                    this.$refs.btnSend.style.cursor='pointer';
                    return true
                }

            },
            toLogin(){
                this.$router.push('/login')
            },
            checkCode(){
                if (this.code===''){
                    this.$refs.codeCheck.style.display='block'
                    return false
                }
                else {
                    this.$refs.codeCheck.style.display='none'
                    return true
                }
            },
            checkUsername(){
                if (this.form.username===''){
                    this.$refs.usernameCheck.style.display='block'
                    return false
                }
                else {

                    this.$refs.usernameCheck.style.display='none'
                    return true
                }
            },
            isPassword(){
                if (this.form.password===null||this.form.password===''){
                    this.$refs.passwordCheck.style.display='block'
                    return false
                }
                else {
                    this.$refs.passwordCheck.style.display='none'
                    return true
                }
            },
            Password2Check(){
                if (this.form.password!==this.checkPassword){
                    this.$refs.password2.style.display='block';
                    return false

                }else{
                    this.$refs.password2.style.display='none';
                    return true
                }

            },
            send(){
                if (this.$refs.btnSend.style.cursor==='pointer'){
                    // console.log(this.$refs.btnUp)
                    this.getRequest('/mail/getInfo/'+this.form.email,null).then(data=>{
                        console.log(data)
                        if (data.code===200){
                            let time=60
                            let timer=setInterval(()=>{
                                if (time===0){
                                    clearInterval(timer)
                                    this.$refs.btnSend.innerText='发送验证码'
                                    this.$refs.btnSend.style.cursor='pointer';

                                }else {
                                    this.$refs.btnSend.innerText=time+' 秒后重写发送'
                                    time--
                                    this.$refs.btnSend.style.cursor='not-allowed';
                                }

                            },1000)

                        }else{
                            this.$message.error(data.message)
                        }
                    })
                }

            },
            finish(){
                if (this.validateMail()&&this.checkCode()&&this.isPassword()&&this.Password2Check){
                    this.postRequest('/user/forgetPwd/'+this.code,this.form).then(data=>{
                        if (data.code===200){
                            this.$message.success('修改成功');
                        }else {
                            this.$message.success(data.message);
                        }
                    })
                    this.$router.push('/login')
                }
                else{
                    return
                }

            }
        }

    }
</script>

<style scoped>
    .btnUp{
        margin-left: 10px;
        height: 30px;
        width: 120px;

    }
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
