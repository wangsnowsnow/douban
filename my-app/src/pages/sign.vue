<template>
  <div>
    <div class="first" v-show="bool">
      <h1>欢迎加入豆瓣</h1>
      <!-- <form action=""> -->
        <div class="form" >
            <input name="uemail" type="email" placeholder="邮箱" />
            <div class="eyediv">
            <input name="pwd" :type="pwdType" class="psd" placeholder="密码" />
            <img :src="openeye" class="eye" @click="changeType()" />
            </div>
            <input name="uname" type="text" placeholder="用户名" />
            <button @click="fun()">立即注册</button>
        </div>
      <!-- </form> -->
        <div class="footer">
            <div class="agree">点击「注册」代表你已阅读并同意用户使用协议</div>
            <div class="btns">
            <a href="#">下载豆瓣App</a>
            </div>
        </div>
    </div>
    <div class="two" v-show="!bool">
        <h1>注册成功</h1>
        <p>请复制以下Token进行登录</p>
        <div class="form">
           <input type="text" name="tokens" class="go">
            <button @click="gologin()">去登陆</button> 
        </div>        
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      pwdType: "password", // 密码类型
      openeye: require("../../static/img/e1.png"), //图片地址
      bool:true
    };
  },
  methods: {
    changeType() {
      this.pwdType = this.pwdType === "password" ? "text" : "password";
      this.openeye =
      this.openeye == require("../../static/img/e1.png")
          ? require("../../static/img/e2.png")
          : require("../../static/img/e1.png");
    },
    fun() {
      var uname = document.getElementsByName("uname")[0].value;
      var upwd = document.getElementsByName("pwd")[0].value;
      var uemail = document.getElementsByName("uemail")[0].value;
      console.log(uname + "***" + upwd + "***" + uemail);
      var param = new URLSearchParams();
      param.append("uname", uname);
      param.append("upwd", upwd);
      param.append("uemail", uemail);
      this.axios({
        method: "post",
        url: "http://localhost:3000/sign",
        data: param
      }).then(data => {
        console.log(data);

        if (data.data.linkid == 1) {
          // // 保存后台发送过来的token码
          window.localStorage.setItem("token", data.data.token);
          window.localStorage.setItem("uname", data.data.uname);
          window.localStorage.setItem("uemail", data.data.uemail);
          console.log(data.data.token);
          alert("zhuce成功");
          this.bool=!this.bool;
          document.getElementsByName("tokens")[0].value=data.data.token;
        
        } else {
          alert("登陆失败");
        }
      });
    },
    // gologin(){
    //   this.$router.push({path:"/status"})
    // }
  }
};
</script>
<style scoped>
h1 {
  font-size: 0.4rem;
  text-align: center;
  margin: 0.4rem 0;
  font-weight: 300;
  color: #42bd56;
}
.form {
  font-size: 0;
  padding: 0.02rem 0.15rem;
}
.form input {
  border: 0.01rem solid #ccc;
  outline: none;
  width: 100%;
  height: 0.5rem;
  box-sizing: border-box;
  padding: 0 0.08rem;
  font-size: 15px;
}
input::-webkit-input-placeholder {
  color: #ccc;
}
.eyediv {
  position: relative;
}
.eye {
  position: absolute;
  right: 0.1rem;
  top: 0.05rem;
  display: block;
  height: 0.3rem;
  width: 0.35rem;
}

button {
  cursor: pointer;
  width: 100%;
  padding: 0.12rem 0.26rem;
  margin-top: 0.1rem;
  font-size: 0.17rem;
  text-align: center;
  color: #fff;
  background: #42bd56;
  border: 0.01rem solid #17aa52;
  border-radius: 0.03rem;
}
.footer .agree {
  font-size: 14px;
  text-align: center;
  color: #aaa;
  margin-top: 0.3rem;
}
.footer .btns {
  text-align: center;
  font-size: 0.14rem;
  margin-top: 0.5rem;
}
.footer .btns a {
  color: #42bd56;
}

.two p{
    font-size: .14rem;
    color: #aaa;
    padding: 0 .2rem;   
}
.go{
    margin-top: .2rem;
}
</style>