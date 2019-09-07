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
        <div>
            <user></user>
        </div>
        <div>
            <gblist></gblist>
            <gblist></gblist>
            <gblist></gblist>
            <gblist></gblist>
            <gblist></gblist>
            <gblist></gblist>
        </div>
        <div class="bottom">
            显示更多广播
        </div>
        <div>
            <footers></footers>
        </div>
    </div>
</template>
<script>
import topnav from '../components/nav/topnav'
import user from '../components/user'
import gblist from '../components/gblist'
import footers from '../components/footer/footers'
export default {
    components:{
        topnav,
        user,
        gblist,
        footers
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
.bottom{
    padding:.2rem 0;
    font-size: .16rem;
    color: #2ca532;
    text-align: center;
}  
</style>