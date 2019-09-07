<template>
    <div>
        <div class="top">
            <topnav></topnav>
        </div>
        <div class="content">
            <div class="hot">
                <h2>最受关注图书｜虚构类</h2>
                <a href="">更多</a>
            </div>
            <div>
                <slidemovie :movie="arr1"></slidemovie>
            </div>
            

            <div class="hot">
                <h2>最受关注图书｜非虚构类</h2>
                <a href="">更多</a>
            </div>
            
            <div>
                <slidemovie :movie="arr3"></slidemovie>
            </div>
            <div class="hot">
                <h2>豆瓣纸书</h2>
                <a href="">更多</a>
            </div>
            <div class="box">
                <img src="../../static/img/1.jpg" alt="">
                <div class="sbox">
                    <h1>造物</h1>
                    <span>￥68</span>
                    <p>改变世界的万物图典，3000幅图里的发明与冒险</p>
                </div>
            </div>
            <div>
                <slidemovie :movie="arr2"></slidemovie>
            </div>
            <div class="hot">
                <h2>发现好电影</h2>
                <a href="">更多</a>
            </div>
        </div>
        <div class="banner">
            <sildeone :lines="obj"></sildeone>
        </div>
        <div style="overflow:hidden;">
            <type></type>
        </div>
        <div>
            <footers></footers>
        </div>
    </div>
</template>
<script>
import topnav from '../components/nav/topnav'
import sildeone from '../components/slide/sildeone'
import type from '../components/slide/type'
import footers from '../components/footer/footers'
import slidemovie from '../components/slide/slidemovie'
export default {
    components:{
        topnav,
        sildeone,
        type,
        footers,
        slidemovie
    },
    data() {
        return {            
            obj:[],
            arr:[]

        }
    },
    created() {
        this.axios({
            method: "get",
            url:"/slide"
        }).then((data)=>{
            // console.log(data.data.goodBook)
            this.obj=data.data.goodBook
        })

        this.axios({
            method:"get",
            url:"/book"
        }).then((data)=>{
            console.log(data.data.books)
            this.arr=data.data.books
        })
    },
    computed: {
        arr1(){
            var lista=this.arr.filter((v,i)=>{
                if(i<=30&&i>20){
                    return this.arr[i]
                }
            })
            return lista
        },
         arr2(){
            var listb=this.arr.filter((v,i)=>{
                if(i<=20&&i>10){
                    return this.arr[i]
                }
            })
            return listb;
        },
         arr3(){
            var listc=this.arr.filter((v,i)=>{
                if(i<=40&&i>30){
                    return this.arr[i]
                }
            })
            return listc;
        }
    }
}
</script>
<style scoped>
.box{
    padding-right: .2rem;
    display: flex;
    margin-bottom: .3rem;
}
.box img{
    width: 1.2rem;
    height: 1.6rem;
    margin-right: .2rem;
}

.sbox h1{
    font-size: .2rem;
    font-weight: 500;
    float: left;
}
.sbox p{
        font-size: .13rem;
    font-weight: 300;
    line-height: .15rem;
    color: #9b9b9b;
    margin-top: .4rem;
}
.sbox span{
   float: right;
    color: #e76648;
    font-size: .16rem;
    line-height: .22rem;
}
.content{
    padding: 0 .2rem;
    margin-top:.5rem ;
}
.hot{
    padding:.15rem 0; 
    /* display: flex; */
    line-height: .3rem;
    overflow: hidden;
}
.hot h2{
    float: left;
    font-size: .18rem;
    color: #111;
    font-weight: 500;
}
.hot a{
    font-size: .15rem;
    color: #42bd56;
    float: right;
}
</style>