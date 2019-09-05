<template>
    <div>
        <div class="top">
            <topnav></topnav>
        </div>
        <div class="content">
            <div class="hot" v-for="(v,i) in arr" :key="i">
                <h2>{{arr[i]}}</h2>
                <a>更多</a>
            </div>
            <!-- <div class="hot">
                <h2>影院热映</h2>
                <a href="">更多</a>
            </div>
            <div class="hot">
                <h2>影院热映</h2>
                <a href="">更多</a>
            </div>
            <div class="hot">
                <h2>影院热映</h2>
                <a href="">更多</a>
            </div>
            <div class="hot">
                <h2>影院热映</h2>
                <a href="">更多</a>
            </div> -->
        </div>
        <div class="banner">
            <sildeone></sildeone>
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
export default {
    components:{
        topnav,
        sildeone,
        type,
        footers
    },
    data() {
        return {
            arr:["影院热映","免费在线观影","新片速递","发现好电影"]
        }
    },
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