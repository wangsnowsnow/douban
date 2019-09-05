<template>
  <div>
    <div class="title">
      <h3>
        <cancel></cancel>
        登录豆瓣
      </h3>
    </div>
    <div class="form">
    <!-- <form action="get"> -->
      <input type="email" placeholder="邮箱" name="uemail"/>
       <div class="eyediv">
           <input :type="pwdType" class="psd"  placeholder="Token" name="upwd"/>
            <img :src="openeye" class="eye" @click="changeType()">
        </div>
      <button @click="fun()">登录</button>
    </div>
    <!-- </form> -->
    <div class="footer">
        <div class="more">使用其他方式登录 & 找回密码</div>
        <div class="btns">
            <router-link to="/sign">注册豆瓣帐号</router-link>
            <a href="#">下载豆瓣App</a>
        </div>
    </div>
  </div>
</template>
<script>
import cancel from '../components/login/cancel'
export default {
  components: {
    cancel
  },
  data() {
      return {
        pwdType: 'password', // 密码类型
        openeye: require('../../static/img/e1.png'), //图片地址
      }
    },
    methods: {
      fun(){
            // 获取输入框的数据
            let uemail = document.getElementsByName("uemail")[0].value;
            let upwd = document.getElementsByName("upwd")[0].value;
            console.log(uemail+upwd)
            let param = new URLSearchParams();
            param.append("uemail",uemail);
            param.append("upwd",upwd);
            this.axios({
                method:"post",
                url:"http://localhost:3000/login",
                data:param
            }).then((ok)=>{
                let linkid = ok.data.linkid;
                if(linkid == 0){
                    alert("恭喜用户"+ok.data.uemail+"登录成功")
                    this.$router.push("/index");
                }else if(linkid == 3){
                    alert("邮箱已被注册，请重新输入用户名");
                }else if(linkid == 1){
                    alert("登录失败，邮箱或者密码错误");
                }
            },(err)=>{
                console.log(err);
            })
        },
      changeType() {
        this.pwdType = this.pwdType === 'password' ? 'text' : 'password';
        this.openeye = this.openeye == require("../../static/img/e1.png") ? require("../../static/img/e2.png") : require("../../static/img/e1.png");
      }
    }
};
</script>
<style scoped>
div{
    font-size: 15px;
}
.title {
  width: 100%;
  height: 0.6rem;
}

.title h3 {
  font-size: 0.18rem;
  display: flex;
  padding: 0 20px;
  line-height: 0.5rem;
  border-bottom: 0.01rem solid #eee;
}
 .eyediv{
     position: relative;
 } 
.eye{
    position: absolute;
    right: .1rem;
    top: .05rem;
    display: block;
    height: .3rem;
    width: .35rem;
 }
.form {
  font-size: 0;
  padding: 0.3rem .2rem 0 .2rem;
}
.form input {
  width: 100%;
  height: 0.5rem;
  box-sizing: border-box;
  border:.01rem solid #ccc;
  padding:.08rem;
  font-size: 15px;
  border-radius: 3px;
  outline: none;

}
.form button{
    width: 100%;
    margin-top: 10px;
    padding: .12rem .26rem;
    background:#17aa52;
    border:1px solid #17aa52;
    font-size: .17rem;
    color: #fff;
    border-radius: 3px;
}
.footer .more{
    color: #aaa;
    text-align: center;
    margin-top: .2rem;
}
.footer .btns{
    margin-top: .5rem;
    text-align: center;
}
.footer .btns a{
    color: #42bd56;
    margin-right: .15rem;
}
</style>