<template>
    <div class="header">
        <div class="left" @click="toHome"></div>
        <div class="right"></div>
    </div>
</template>

<script>
    export default {
        name: "login-header-index",
        methods:{
            toHome(){
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .header{
        height: 85px;
        padding: 0 200px;
        /*border: 1px solid red;*/

    }
    .left{

        float: left;
        /*border: 2px solid black;*/
        margin-top: 9px;
        width: 130px;
        height: 65px;
        background: url(./images/sprites-hash.png) -447px -55px;

    }
    .left:hover{
        cursor: pointer;
    }
    .right{
        float: right;
        margin-top: 28px;
        /*border: 2px solid black;*/
        width: 293px;
        height: 32px;
        background: url(./images/sprites-hash.png) -1px -36px;


    }


</style>
