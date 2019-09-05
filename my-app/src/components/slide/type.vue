<template>
    <div>
        <div class="type">
            <h3>分类预览</h3>
            <ul class="typeul" v-for="(v,i) in arr" :key="i">
                <li><a href="">{{arr[i]}}<span></span></a></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    components:{},
    data() {
        return {
            arr:["经典","冷门佳作","豆瓣高分","动作","戏剧","爱情","悬疑","恐怖","科幻","治愈","文艺","成长","动画","华语","欧美","韩国","日本"]
        }
    },
}
</script>
<style scoped>
.type{
    margin-top: .2rem;
    padding-left: .2rem;
}
.type h3{
    font-size: .18rem;
    color: #111;
}
.typeul{
    margin-top: .2rem;
}
.typeul li{
    box-sizing: border-box;
    padding-right: .23rem;
    font-size: 0;
    float: left;
    width: 50%;
    border-top: .01rem solid #eee;
    border-right: .01rem solid #eee;
}
.typeul li a{
    padding:.15rem 0;
    display: block;
    font-size: .16rem;
    color:#42bd56;
    margin-left: .2rem;
}
.typeul li span{
    float: right;
    border-right: .01rem solid #ccc;
    border-bottom: .01rem solid #ccc;
    width: .08rem;
    height: .08rem;
    transform: rotate(-45deg);
    margin-top: .1rem;
}
</style>