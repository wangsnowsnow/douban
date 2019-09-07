<template>
    <div>
        <div class="con">
            <div class="list" v-for="(v,i) in movie" :key="i" >
                <img :src="v.images.large" alt="">
                <p>{{v.title}}</p>
                <div class="start">
                <el-rate 
                    v-model="arr[i]"
                    disabled
                    show-score
                    font-size=".12rem"
                    text-color="#ff9900"
                    score-template="{value}">
                </el-rate>
                </div>
            </div>
        <!-- <div class="list">
            <img src="../../../static/img/1.jpg" alt="">
            <p>1111111</p>
        </div>
        <div class="list">
            <img src="../../../static/img/1.jpg" alt="">
            <p>1111111</p>
        </div><div class="list">
            <img src="../../../static/img/1.jpg" alt="">
            <p>1111111</p>
        </div><div class="list">
            <img src="../../../static/img/1.jpg" alt="">
            <p>1111111</p>
        </div>
        <div class="list">
            <img src="../../../static/img/1.jpg" alt="">
            <p>1111111</p>
        </div>
        <div class="list">
            <img src="../../../static/img/1.jpg" alt="">
            <p>1111111</p>
        </div>
        <div class="list">
            <img src="../../../static/img/1.jpg" alt="">
            <p>1111111</p>
        </div> -->
        </div>
    </div>
</template>

<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
export default {
        data() {
            return {
                 arr:[4.1,3.5,2.1,5.0,4.9,3.2,3.8,4.8,4.0,4.6]
                
            }
        },
    props:{
        movie:{
            type:Array,
            required:true
        }
    },
    created() {
        console.log(this.movie)
    },
}
</script>
<style>
  .el-rate__icon {
    font-size: 14px;
  }  
</style>
<style scoped>
.start{
    font-size: 0;
    margin-left: .1rem;
    margin-top: .1rem;
}
.start span{
    font-size: .14rem;
}
.con{
    overflow: auto;
    display: flex;
}
.list{
    margin-right: .1rem;
}
.list img{
    width: 1.1rem;
    height: 1.5rem;
    padding:0 .1rem;
}
.list p{
    font-size: .12rem;
    margin-top: .1rem;
    text-align: center;
}

</style>