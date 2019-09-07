<template>
    <div>
       <div class="card">
           <div class="top">
               <img src="../../static/img/logo.png" alt="">
                <div class="con">
                    <strong>豆瓣<span>写了日记</span></strong>
                    
                    <p>2017-03-01 19:30:41</p>
                </div>
           </div>
           <div class="article">
               <h1>豆瓣App 4.12.0 主要更新</h1>
               <p>可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</p>
           </div>
           <div class="info">
               <span><i>4</i></span>
               <span><i>0</i></span>
               <span><i>11</i></span>
               <span><i></i></span>
           </div>
        </div> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.card{
    padding:.3rem .2rem .3rem .3rem;
    border-bottom: .01rem solid #e8e8e8;
}
.top{
    font-size: 0;
    display: flex;
}
.top img{
    width: .48rem;
    height: .48rem;
    border-radius: 100%;
}
.con{
    margin-left: .1rem;
}
.con strong{
    font-size: .18rem;
}
.con strong span{
    font-weight: 400;
    color: #aaa;
}
.con p{
    font-size: .16rem;
    color: #aaa;
}
.article{
    margin: .1rem 0 .2rem .6rem;
    padding: .15rem;
    border-radius: .02rem;
    border: .01rem solid #d8d8d8;
}
.article h1{
    font-size: .17rem;
    font-weight: 500;
    line-height: .14;
    color: #494949;
    margin-bottom: .05rem;
}
.article p{
    margin-top: .15rem;
    font-size: .12rem;
    line-height: .2rem;
    color: #aaa;
}
.info{
    font-size: 0;
    /* position: relative; */
}
.info span{
    display: inline-block;
    width: .3rem;
    height: .3rem;
}
.info i{
    color: #aaa;
    line-height: .3rem;
    padding-left: .4rem;
    padding-top: .2rem;
    font-size: 14px;
    font-style: normal;
}
.info span:nth-child(1){
    background: url(../../static/img/1.svg) no-repeat;
    margin-right: .4rem;
}
.info span:nth-child(2){
    background: url(../../static/img/2.svg) no-repeat;
    margin-right: .4rem;
}
.info span:nth-child(3){
    background: url(../../static/img/3.svg) no-repeat;
    margin-right: .4rem;
}
.info span:nth-child(4){
    background: url(../../static/img/4.svg) no-repeat;
     margin-left: .5rem;
    background-position: 0 .1rem;

}
</style>