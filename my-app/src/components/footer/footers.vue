<template>
    <div>
        <div class="foot">
            <div class="info">
                <img src="../../../static/img/logo.png" alt="">
                <div class="con">
                    <h4>豆瓣</h4>
                    <p>我们的精神角落</p>
                </div>
            </div>
            <a href="">去 App Store 免费下载 iOS 客户端</a>
        </div>
    </div>
</template>
<script>
export default {
    components:{}
}
</script>
<style scoped>
.foot{
    margin-top: .6rem;
    margin-bottom: .5rem;
    font-size: 0;
}
.info{

    display: flex;
    margin-left: 1.1rem;
}
.info img{
    width: .6rem;
    height: .6rem;
    margin-right: .2rem;
}
.con h4{
    font-weight: 500;
    font-size: .24rem;
}
.con p{
    font-size: .14rem;
}
.foot a{
    margin-left: .7rem;
    font-size: 15px;
    color: #42bd56;
}
</style>