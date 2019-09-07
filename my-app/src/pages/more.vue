<template>
    <div>
        <div class="header">
            <span @click="back()">关闭</span>
            <input type="text">
            <span></span>
        </div>
        <div class="content">
            <ul class="con">
                <li v-for="(v,i) in obj" :key="i">
                    <router-link :to="v.url" :style="{color:v.titlecolor}">{{v.title}}<p>{{v.content}}</p></a></router-link>
                </li>
                <!-- <li><a href="">电影<p>影院热映</p></a></li>
                <li><a href="">同城<p>周末活动</p></a></li>
                <li><a href="">阅读<p>电子书</p></a></li>
                <li><a href="">东西<p>心爱之物</p></a></li>
                  
                <li><a href="">电视<p>正在热播</p></a></li>
                <li><a href="">小组<p>志趣相投</p></a></li>
                <li><a href="">游戏<p>虚拟世界</p></a></li>
                <li><a href="">PM<p>心愿歌单</p></a></li>
                
                <li><a href="">图书<p>畅销排行</p></a></li>
                <li><a href="">音乐<p>新碟榜</p></a></li>
                <li><a href="">应用<p>玩手机</p></a></li>
                <li><a href="">市集<p>购买原创</p></a></li> -->
            </ul>
        </div>
        <div class="bottom">
            <div class="bottom-one">
                <router-link to="/sign">注册账号</router-link>
                <router-link to="/login">登录豆瓣</router-link>
            </div>
            <div class="bottom-one">
                <router-link to="/more">使用桌面版</router-link>
                <router-link to="/more">使用豆瓣APP</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components:{},
    data(){
        return{
            obj:[
               
                    {title:"电影",content:"影院热映",titlecolor:"#2384E8",url:"/movie"},
                    {title:"电视",content:"正在热播",titlecolor:"#7a6adb",url:"/index"},
                    {title:"图书",content:"畅销排行",titlecolor:"#9f7860",url:"/book"},
                    {title:"同城",content:"周末活动",titlecolor:"#e6467e",url:"/index"},
                    {title:"小组",content:"志趣相投",titlecolor:"#2ab8cc",url:"/group"},
                    {title:"音乐",content:"新碟榜",titlecolor:"#f48f2e",url:"/index"},
                    {title:"阅读",content:"电子书",titlecolor:"#9f7860",url:"/index"},
                    {title:"游戏",content:"虚拟世界",titlecolor:"#5774c5",url:"/index"},
                    {title:"应用",content:"玩手机",titlecolor:"#596cdd",url:"/index"},
                    {title:"东西",content:"心爱之物",titlecolor:"#e1644d",url:"/index"},
                    {title:"PM",content:"心愿歌单",titlecolor:"#40afc9",url:"/status"},
                    {title:"市集",content:"购买原创",titlecolor:"#42db56",url:"/index"}
                
            ]
        }
        
    },
    
    methods: {
        back(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
.header{
    display: flex;
    /* width: 100%; */
    height: .6rem;
    padding: 0 .3rem;
    border-bottom:.01rem solid #f3f3f3;
    line-height: .6rem;
}
.header span{
    color: #42bd56;
    font-size: .18rem;
}
.header input{
    border: 0;
    background-color: #f3f3f3;
    border-radius: .03rem;
    width: 2.5rem;
    height: .43rem;
    font-size: .14rem;
    margin:auto 0 auto .2rem ;
    background-image: url(../../static/img/search.png);
    background-repeat: no-repeat;
    background-size: .2rem .2rem;
    background-position: 50%;
}
.content{
    overflow: hidden;
    border-bottom:.01rem solid #f3f3f3;
    margin-top: .3rem;
}

.con li{
    width: 33.33%;
    float: left;
}
.con li a{
    font-size: .24rem;
    display: block;
    text-align: center;
    margin-bottom: .4rem;
}
.con li a p{
    font-size: 12px;
    color: #999;
}
.bottom{
    width: 100%;
     margin: 0 auto;
}
.bottom .bottom-one{
    display: flex;
    padding: .15rem 0;
    font-size: .16rem;
    color: #42bd56; 
    border-bottom: .01rem solid #f3f3f3;
}
.bottom a{
    box-sizing: border-box;
    display: inline-block;
    color: #42bd56;
    width: 50%;
    text-align: center;
    border-right: .01rem solid #f3f3f3;

}
</style>