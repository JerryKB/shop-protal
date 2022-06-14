<template>
    <div>
        <LoginHeader></LoginHeader>
        <ForgetMain></ForgetMain>
        <Footer></Footer>
    </div>


</template>

<script>
    import LoginHeader from '@/views/Login/LoginHeader'
    import ForgetMain from './ForgetMain'
    import Footer from '@/components/Footer'
    export default {
        name: "forget-index",
        components:{
            LoginHeader,ForgetMain,Footer
        }
    }
</script>

<style scoped>

</style>
