<!--取消的功能组件-->
<template>
    <div>
        <span @click="back()">取消</span>
    </div>
</template>
<script>
export default {
    components:{

    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
span{
  font-size: 15px;
  color: #42bd56;
  font-weight: 500;
  margin-right:1rem;
}
</style>