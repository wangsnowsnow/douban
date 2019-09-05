<template>
    <div>
        <div class="topnav">
            <h1><router-link to="/index">豆瓣</router-link></h1>
            <ul>
                <li v-for="(v,i) in obj" :key='i'><router-link :to="v.url" :style="v.color">{{v.title}}</router-link></li>
                <li><router-link to="/more"><img src="../../../static/img/more.png" alt=""></router-link></li>
            </ul>
            
        </div>
       
    </div>
</template>
<script>
export default {
    components:{},
    data(){
        return{
            obj:[
                {title:"电影",url:"/movie",color:"color:#2384e8"},
                {title:"图书",url:"/book",color:"color:#9f7860"},
                {title:"广播",url:"/status",color:"color:#e4a813"},
                {title:"小组",url:"/group",color:"color:#2ab8cc"}
            ]
        }
    }
}
</script>
<style scoped>
.topnav{
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: .5rem;
    border-bottom: .01rem solid #f3f3f3;
    padding: 0 .18rem;
    line-height: .5rem;
    display: flex;
}
.topnav h1{
    font-size: .30rem;
    
}
.topnav h1 a{
    
    color: #00b600;
}
.topnav ul{
    display: flex;
    margin-left: .8rem;
}
.topnav ul li{
    font-size:.16rem;
    margin-right: .1rem;
}
.topnav ul li img{
    margin-top: .15rem;
    width: .3rem;
    height: .2.5rem;
}

</style>