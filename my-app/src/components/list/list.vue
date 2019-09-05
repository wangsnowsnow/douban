<template>
    <div>
        <div class="one-list">
            <div class="content">
                <div class="word">
                    <h3>{{title}}</h3>
                    <p>{{address}}</p>
                </div>
                <img :src="imgurl">
            </div>
            <div class="author">{{author}}</div>
        </div>
    </div>
</template>
<script>
export default {
    components:{},
    props:{
        title:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        imgurl:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
.one-list{   
    background-color: #fff;
    overflow: hidden;
    padding: .3rem .25rem;
    border-bottom:1px solid #ddd;
}
.content{
    width: 100%;
    display: flex;
}
.word{
    width: 65%;
}
.word h3{
    margin-top: 0;
    margin-bottom: .06rem;
    text-align: justify;
    font-size: .17rem;
    font-weight: 500;
    color: #494949;
}
.word p{
    
    text-align: justify;
    color: #aaa;
    font-size:.12rem;
    overflow: hidden;
}
.content img{
    width: .85rem;
    height: 1rem;    
    margin-left: .3rem;
}
.author{
    color: #ccc;
    font-size: 12px;
}
</style>
