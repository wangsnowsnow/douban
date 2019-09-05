<template>
    <div>
        <div>
            <topnav></topnav>
        </div>
        <div class="bg">
            <div class="word">
                <span>每天看点好内容</span>
                <span>极速下载</span>
                <span>打开</span>
            </div>            
        </div>
        <div class="info">
            <h1>{{obj.title}}</h1>
            <div class="imgs">
                <img :src="obj.image" alt="">
            </div>
            <!-- <h1>魔幻世界再度开启！《神奇动物：格林德沃之罪》超前观影北京专场</h1>
            <div class="imgs">
                <img src="../../static/img/1.jpg" alt="">
            </div> -->
        </div>
        <div class="detials">
            <span>时间</span>
            <ul>
                <li>{{obj.time_str}}</li>
            </ul>
            <!-- <span>时间</span>
            <ul>
                <li>2019-06-06 10:00:00</li>
                <li>2019-10-21 19:00:00</li>
            </ul> -->
        </div>
        <div class="detials">
            <span>地点</span>
            <ul>
                <li>{{obj.address}}</li>
            </ul>
            <!-- <span>地点</span>
            <ul>
                <li>北京 朝阳区 朝外大街 侨福芳草地D座10层 侨福当代美术馆</li>
            </ul> -->
        </div>
        <div class="detials">
            <span>费用</span>
            <ul>
                <li>{{obj.fee_str}}</li>
            </ul>
        </div>
        <div class="detials">
            <span>类型</span>
            <ul>
                <li>{{obj.subcategory_name}}</li>
            </ul>
        </div>
         <div class="detials">
            <span>起始时间</span>
            <ul>
                <li>侨福当代美术馆</li>
            </ul>
        </div>
        <div class="tags">
            <ul>
                <li>{{obj.category}}</li>
            </ul>
        </div>
        <div class="play">
            <h2>活动详情</h2>
            <p>{{obj.content}}</p>
        </div>
    <footers></footers>
    </div>
</template>
<script>
import topnav from '../components/nav/topnav'
import footers from '../components/footer/footers'
export default {
    components:{
        topnav,
        footers
    },
    data(){
        return {
            obj:[]
        }
    },
    created () {
        let newId = this.$route.query.id;
        console.log(newId)
        this.axios({
            method:"get",
            url:"/list"
        }).then((data)=>{
                  
            data.data.shouye.filter((v,i)=>{
                if(v.id == newId){
                    this.obj =data.data.shouye[i];
                     console.log(data.data.shouye)
                }
            })
        },(err)=>{
            console.log(err)
        })

    }
}
</script>
<style scoped>
.bg{
    background:url(../../static/img/bg.jpg) no-repeat;
    background-size: cover;
    width: 100%;    
    height: .8rem;
    margin-top: .5rem;
}
.word {
    font-size: 0;
    padding: 0 .2rem;
    line-height: .8rem;
}
.word span{
    font-size:14px;
}
.word span:nth-child(1){
    color: #2ca532;
}
.word span:nth-child(2){
    color: #fff;
    background-color: #2ca532;
    padding: .05rem .2rem;
    border-radius: .05rem;
    margin-left: .8rem;
}
.word span:nth-child(3){
    color: #2ca532;
    background-color: #fff;
    border: .01rem solid #2ca532;
    margin-left: .1rem;
    padding: 0.05rem .15rem;
    border-radius: .05rem;
}
.info{
    margin: .1rem;
}
.info h1{
    font-size: .18rem;
    color: #494949;
    margin:.25rem 0;
}
.imgs{
    margin: .2rem auto;
    text-align: center;
}
.imgs img{
    max-width: 2.5rem;
    height: auto;
    margin: 0 auto;
}
.detials{
    overflow: hidden;
    padding:0 .1rem;
    margin-bottom: .1rem;
}
.detials span{
    float: left;
    font-size: 14px;
    color: #666;
}
.detials ul{
    margin-left: .6rem; 
}
.detials ul li{
    /* margin-bottom: .1rem; */
    font-size: 14px;
}
.tags{
    padding: 0.1rem .1rem ;
}
.tags ul{
    overflow: hidden;
}
.tags li{
    float: left;
    background-color: #f5f5f5;
    font-size: 14px;
    padding: 0 .12rem;
    line-height: .28rem;
    border-radius: .3rem;
    margin-right: .1rem;
    margin-bottom: .1rem;
}
.play{
    padding:0 .1rem;
}
.play h2{
    font-size: .16rem;
    color: #072;
    margin:.2rem 0;
}
.play p{
    font-size: .14rem;
}
</style>