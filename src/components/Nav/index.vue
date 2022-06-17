<template>
    <div class="nav">
        <div class="sort">
            商品分类
            <ul>
                <li v-for="(one,index1) in menu" :key="index1">
                    {{one.name}}
                   <div class="nav_detail">
                       <dl class="fore" v-for="(two,index2) in one.children" :key="index2">
                           <dt>
                               <a href="">{{two.name}}</a>
                           </dt>
                           <dd>
                               <em v-for="(three,index3) in two.children" :key="index3">
                                   <a  @click="toProduct(three.id)">{{three.name}}</a>
                               </em>

                           </dd>
                       </dl>
                   </div>
                </li>
            </ul>


        </div>

        <div class="minNav">
            <a href="#">推荐</a>
            <a href="#">3折疯抢</a>
            <a href="#">唯品快抢</a>
            <a href="#">唯品奥莱</a>
            <a href="#">女装</a>
            <a href="#">鞋包</a>
            <a href="#">运动</a>
            <a href="#">母婴</a>
            <a href="#">美妆</a>
            <a href="#">男装</a>
            <a href="#">电器</a>
            <a href="#">内衣</a>
            <a href="#" class="more">
                更多
            </a>

        </div>
    </div>
</template>

<script>
    export default {
        name: "nav-index",
        data(){
          return {
              menu:{}

          }
        },
        mounted() {
            this.getRequest('/product-category/getInfo').then(data=>{
                this.menu=data
                console.log(this.menu[0].children)
            })
        },
        methods:{
            toProduct(id){
               this.$router.push({
                   path:'/product',
                   query:{
                       id
                   }
               })
            }
        }



    }
</script>

<style scoped>
    .nav{
        position: relative;
        height: 42px;
        line-height: 42px;
        text-align: center;
        z-index: 3;

    }
    .nav .sort{
        position: absolute;
        left: 220px;
        width: 120px;
        height: 42px;
        background-color: #fa2a83;
        color: #ffffff;
        z-index: 2;
    }
    /* 抽屉打开（完成） */
    .nav .sort ul{
        display: none;
        background-color: #f00581;
    }
    .nav .sort:hover ul{
        display: block;
        overflow: hidden;
        animation-name:open;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;

    }
    @keyframes open{
        0%{
            opacity: 0;

            visibility: hidden;
           height: 0;


        }
        100%{
            opacity: 1;
            height: 420px;
            visibility: visible !important;

        }
    }
    .nav  .sort .nav_detail{
        position: absolute;
        top: 42px;
        left: 0;
        border-top: 1px solid #f4f4f4;
        margin-left: 120px;
        height: 409px;
        width: 1000px;
        padding: 5px 15px;
        background-color: #ffffff;
        display: none;

    }
    .nav .sort ul li:hover .nav_detail{
        display: block;
    }
    .nav .sort ul li:hover{
        background-color: #ffffff;
        color:#f00581;
    }
    .nav .minNav{
        position:absolute;
        height: 100%;
        left: 380px;
    }
    .nav .minNav a{
        display: inline-block;
        padding: 0 15px;
        font-size: 14px;
    }
    .nav .minNav a:hover{
        color: #f00581;
    }

    .nav .minNav a:first-child{
        color: #f00581;
        font-weight: 600;
    }
    .nav_detail .fore {
        border-top: 0;
        font-size: 5px;
    }
    .nav_detail dl dt{
        float: left;
        width: 102px;
        line-height: 22px;
        text-align: right;
        padding: 3px 6px 0 0;
        font-weight: 600;
    }
    .nav_detail dl dd{
        float: left;
        width: 800px;
        padding: 3px 0 0;
        overflow: hidden;
    }
    .nav_detail dl em{
        float: left;
        height: 30px;
        line-height: 14px;
        padding: 0 8px;
        margin-top: 5px;


    }
    .nav_detail dl em:hover{
        cursor: pointer;
    }

</style>
