<template>
    <div>
        <Banner></Banner>
        <SpecialProduct></SpecialProduct>
    </div>

</template>

<script>
    import Banner from '@/views/Home/Banner'
    import SpecialProduct from '@/views/Home/SpecialProduct'
    export default {
        name: "home-index",
        components:{
            Banner,SpecialProduct
        },
    }
</script>

<style scoped>

</style>
