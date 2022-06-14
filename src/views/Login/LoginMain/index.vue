<template>
    <div class="login-main">
        <div class="inputs">
            <h3>账号登录</h3>
            <div class="username-login">
                <i class="el-icon-user"></i>
                <input type="text" v-model="form.username" placeholder="请输入用户名"></input>
            </div>
            <div class="password-login">
                <i class="el-icon-lock"></i>
                <input ref="pwd" v-model="form.password" type="password" placeholder="请输入密码"></input>
                <i id="iconInput" :class="icon" @click="isShow"></i>
            </div>
            <div class="other">
                <p><a @click="registry">注册账号</a></p>
                <p><a @click="forget">忘记密码</a></p>
            </div>
            <div class="login">
                <button class="btn" @click="login">登录</button>

            </div>


        </div>

    </div>
</template>

<script>
    export default {
        name: 'Login',
        data(){
            return{
                icon:'fa fa-eye-slash',
                form:{
                    username:'',
                    password:''
                }
            }
        },
        mounted() {
            this.$bus.$emit('hello',this.name)
        },
        methods:{
            isShow(){
                this.icon === 'fa fa-eye-slash' ? this.icon = 'fa fa-eye' : this.icon = 'fa fa-eye-slash';
                this.$refs.pwd.type === 'password' ? this.$refs.pwd.type = 'text' : this.$refs.pwd.type = 'password';
            },

            login(){

            },
            registry(){
                this.$router.push('/registry')
            },
            forget(){
                this.$router.push('/forget')
            }

        }
    }
</script>

<style  scoped>
    .login-main{
        position: relative;
        height: 700px;
        background:url(./images/bg_main.jpg) center;
    }
    .inputs{
        position: absolute;
        height: 364px;
        top:100px;
        right:200px;
        width: 360px;
        background-color: #ffffff;
    }
    .inputs h3{
        font-family: "Adobe 宋体 Std L";
        padding: 13px 0;
        color: #f10180;
        text-align: center;
        border-bottom: 1px solid #d2d4d4;
        vertical-align: center;
    }
    i[class|="el-icon"]{
        display: inline-block;
        color: #e1e1e1;
        font-size: 23px;

    }
    .inputs .username-login,.password-login{
        border: 1px solid #b2b2b2;
        margin: 40px auto;
        padding: 0 5px;
        width: 300px;
        border-radius: 10px;
        color: #9999a6;

    }

    .inputs .password-login{
        margin-bottom: 0;
    }
    .inputs .username-login input,.inputs .password-login input{
        margin-left: 10px;
        height: 40px;
        width: 250px;
        user-select: none;


    }
    #iconInput{
        color: #5a4c4c;
    }
    .inputs .login{
        /*border: 1px solid black;*/
        margin-top: 50px;
        height: 45px;
        text-align: center;
        line-height: 45px;

    }
    .inputs .login .btn{
        width: 80%;
        height: 45px;
        color: #ffffff;
        border: none;
        border-radius: 22.5px;
        background-color: #f10180;
    }
    .inputs .other{
        margin-top: 10px;
        font-size: 13px;

    }
    .inputs .other p{
        float: right;
        margin-right: 16px;
    }
    .inputs .other p a:hover{
        cursor: pointer;
        color: #f10180;
    }



</style>
