<template>
    <div>
        <LoginHeader></LoginHeader>
        <LoginMain></LoginMain>
        <Footer></Footer>
    </div>

</template>

<script>
    import LoginHeader from '@/views/Login/LoginHeader'
    import LoginMain from '@/views/Login/LoginMain'
    import Footer from '@/components/Footer'
    export default {
        name: "login-index",
        data(){
            return{
                loginShow:true,
                forgetPassword:true
            }
        },
        props:['show'],
        components:{
            LoginHeader,Footer,LoginMain,
        },
    }
</script>

<style scoped>

</style>
