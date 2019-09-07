<template>
    <div>
        <div class="user">
            <div class="left">
                <img src="../../static/img/user.jpg" alt="">
                <p>请先登陆</p>
            </div>
            <div class="right">
                <img src="../../static/img/pen.svg" alt="">
                <img src="../../static/img/photo.svg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.user{
    border-bottom: .02rem solid #e8e8e8;
    display: flex;

}
.left{
    padding: .3rem .3rem .2rem .3rem ;
    display: flex;
}
.left img{
       border-radius: 100%;
}
.left p{
    padding-left: .1rem;
    line-height: .5rem;
    font-size: .15rem;
    color: #aaa;
}
.right{
    display: flex;
    margin: .4rem 0 0 .8rem;
}
.right img{
    margin-right: .2rem;
    width: .3rem;
    height: .3rem;
}
</style>