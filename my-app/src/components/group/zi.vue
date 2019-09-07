<template>
  <div>
    <ul class="list" v-for="(v,i) in groupzi" :key="i">
      <li>
          
        <div class="con" >
            <div class="left">
                <img :src="v.images.small" alt="">
                <p>{{v.title}}</p>
            </div>
            <div class="right">
                {{v.group_member}}
            </div>
        </div>
        <div class="new">
            <span>{{v.group_topic.time}}</span>
            <span>{{v.group_topic.title}}</span>
        </div>
       </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  props:{
      groupzi:{
          type:Array,
          required:true
      }
  }
};
</script>
<style scoped>
.list{
    padding: .2rem ;
        border-bottom: .1px solid #f2f2f2;
}
.con{
    overflow: hidden;

}
.left{
    display: flex;
    float: left;
}
.left img{
    width: .5rem;
    height: .5rem
}
.left p{
    font-size: .18rem;
}
.right{
    float: right;
    font-size: .16rem;
    color:#aaa;
}
.new {
    display: flex;
    font-size: 0;
    line-height: .5rem;
    margin-top: .1rem;
}
.new span{
    font-size: .16rem;
    line-height: .3rem;
    display: inline-block;
    color: #aaa;
}   
.new span:nth-child(2){
    width: 2.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>