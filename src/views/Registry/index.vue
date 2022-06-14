<template>
    <div>
        <LoginHeader></LoginHeader>
        <RegistryMain></RegistryMain>
        <Footer></Footer>
    </div>

</template>

<script>
    import LoginHeader from '@/views/Login/LoginHeader'
    import RegistryMain from './RegistryMain'
    import Footer from '@/components/Footer'
    export default {
        name: 'registry-index',
        components:{
            RegistryMain,LoginHeader,Footer
        },
        methods:{
            toLogin(){
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>

</style>
