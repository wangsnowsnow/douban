<template>
    <div>
        <div>
            <div class="house">
                <h2>{{con}}</h2>
                <zi :groupzi="groupfu" ></zi>
                <p>更多小组</p>
            </div>
        </div>
    </div>
</template>
<script>
import zi from './zi'
export default {
    components:{
        zi
    },
    data() {
        return {
           
        }
    },
    props:{
        groupfu:{
            type:Array,
            required:true
        },
        con:{
           type:Array,
            required:true 
        }
    }
}
</script>
<style scoped>
.house{
    margin-top: .1rem;
}
.house h2{
    font-size: .17rem;
    color: #111;
    font-style: normal;
    padding-left: .2rem;
}
.house p{
    margin-bottom: .2rem;
    padding: .2rem 0;
    font-size: .16rem;
    line-height: .18rem;
    text-align: center;
    color: #42bd56;
}
</style>