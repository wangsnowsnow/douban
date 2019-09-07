<template>
    <div>
        <div>
            <topnav></topnav>
        </div>
        <div style="margin-top:.45rem">
            <user></user>
        </div>
        <div>
            <fu :groupfu="obj" :con="con[0].mes"></fu>
            <fu :groupfu="obja" :con="con[1].mes"></fu>
            <fu :groupfu="objb" :con="con[2].mes"></fu>
        </div>
        <div>
            <footers></footers>
        </div>
    </div>
</template>
<script>
import topnav from '../components/nav/topnav'
import user from '../components/user'
import fu from '../components/group/fu'
import footers from '../components/footer/footers'

export default {
    components:{
       topnav ,
       user,
       fu,
       footers
    },
    data() {
        return {
            obj:[],
            obja:[],
            objb:[],
            con:[]
        }
        
    },
    created() {
        this.axios({
            method:"get",
            url:"/groupa"
        }).then((data)=>{
            console.log(data.data.mes)
            this.obj=data.data.xiaozua
            this.obja=data.data.xiaozub
            this.objb=data.data.xiaozuc
            this.con=data.data.mes
        })
    },
}
</script>
<style scoped>

</style>