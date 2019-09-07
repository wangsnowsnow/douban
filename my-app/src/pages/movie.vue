<template>
    <div>
        <div class="top">
            <topnav></topnav>
        </div>
        <div class="content">
            <div class="hot">
                <h2>影院热映</h2>
                <a href="">更多</a>
            </div>
            <div>
                <slidemovie :movie="arr2"></slidemovie>
            </div>
            

            <div class="hot">
                <h2>影院热映</h2>
                <a href="">更多</a>
            </div>
            
            <div>
                <slidemovie :movie="arr1"></slidemovie>
            </div>
            <div class="hot">
                <h2>免费在线观影</h2>
                <a href="">更多</a>
            </div>
            <div>
                <slidemovie :movie="arr3"></slidemovie>
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
            url:"/findmovie"
        }).then((data)=>{
            console.log(data.data.faxianhaodianying)
            this.obj=data.data.faxianhaodianying
        })

        this.axios({
            method:"get",
            url:"/slidemovie"
        }).then((data)=>{
            console.log(data.data.movie)
            this.arr=data.data.movie
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