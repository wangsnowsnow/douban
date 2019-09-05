<template>
    <div>

        <div class="top-nav-box">
             <topnav></topnav>
        </div>
        <div class="search">
            <ul class="searchul">
                <li><router-link to="/movie">影院热映</router-link></li>
                <li><router-link to="/movie">欧美新碟榜</router-link></li>
                <li><router-link to="/sign">注册帐号</router-link></li>
                <li><router-link to="/login">登录豆瓣</router-link></li>
            </ul>
        </div>
        <img src="../../static/img/loading_green.c0f9be0.gif" v-if="obj.length<=0" class="loading">
        <div v-else >
            <div @click="fun(v.id)" v-for="(v,i) in obj" :key="i">
                <router-link :to="{path:'/detail',query:{id:v.id}}">
                    <list :title="v.title" :imgurl="v.image" :address="v.address" :author="v.category_name"></list>
                </router-link>
            </div>
            
        </div>
    </div>
</template>
<script>
import topnav from '../components/nav/topnav'
import list from '../components/list/list'
import axios from 'axios'
export default {
    components:{
        topnav,
        list
    }, 
    data(){
        return{
            obj:[]
        }
    },
    created() {
        setTimeout(()=>{
            this.axios({
                    method:"get",
                    url:"/list"
                }).then((data)=>{
                    // console.log(data.data.shouye)
                    this.obj=data.data.shouye;
                })
        },2000)

    },
    methods: {
        fun(i){
            console.log(i)
        }
    },
}
</script>
<style scoped>
/* .top-nav-box{
    position: fixed;
    top: 0;
    left: 0;
} */
.loading{
    margin:0 auto;
}
.search{
    padding: 0 .24rem;
}
.searchul{
    font-size: 15px;
    margin-top: .7rem;
    text-align: center;
}
.searchul li{
    float: left;
    width: 50%;
    padding: .03rem;
    box-sizing: border-box;
}
.searchul li a{
    display: block;
    color: #494949;
    background-color: #f6f6f6;
    padding: .12rem 0;
    line-height: .2rem;
    border-radius: 3px;
}
</style>