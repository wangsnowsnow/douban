<template>
    <div>
        <ul class="slideul">
            <li v-for="(v,i) in lines" :key="i" :style="v.line?'display: block; border: none;padding: 0;':''">
                <a v-if="!v.line" :href="v.href" :style="{color:v.color}">{{v.title}}</a>
            </li>
            <!-- <li><a href="">同时入选IMDB250和豆瓣电影250的电影</a></li>
            <li><a href="">带你进入不正常的世界</a></li>
            <li><a href="">用电【影】来祭奠逝去的岁月</a></li>
            <li><a href="">女孩们的故事【电影】</a></li>
            <li></li>
            <li><a href="">科幻是未来的钥匙——科幻启示录【科幻题材】</a></li>
            <li><a href="">美国生活面面观</a></li>
            <li><a href="">2015终极期待</a></li>
            <li><a href="">经典韩国电影——收集100部</a></li> -->
        </ul>
    </div>
</template>
<script>
export default {
    components:{},

    props:{
        lines:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>
.slideul{
    white-space: nowrap;
    overflow:auto;
    font-size: 0;
}
.slideul li{
    margin: 0 0 .1rem .2rem;
    border: 1px solid rgb(255, 172, 45);
    font-size: 0;
    padding:.2rem .3rem;
    display: inline-block;
    border-radius: .05rem;
}
/* .slideul li:nth-child(4){
    display: block; 
     border: none;
    padding: 0;
} */

.slideul li a{
    font-size: 16px;

}
</style>