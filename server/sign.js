var express=require("express")
var app=express()
var crypto=require("crypto")
var mongoose=require("mongoose")
var bodyParser=require("body-parser")
var uE=bodyParser.urlencoded({extended:false})
var jwt=require("jsonwebtoken")
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next()
})
var dbCollection=mongoose.model("exams",{
    uname:String,
    upwd:String,
    uemail:String,
    token:String
})
app.post("/sign",uE,function(req,res){
    var uname=req.body.uname
    var upwd=req.body.upwd
    var uemail=req.body.uemail

    console.log(uname+upwd+uemail)
    var md5Pwd=crypto.createHash('md5').update(upwd).digest('hex');
    console.log(md5Pwd)
    mongoose.connect("mongodb://localhost:27017/bb",{useNewUrlParser:true},function(err){
        if(err){
            console.log("err")
        }else{
            console.log("ok")
            var obj={
                signok:true,
                uname:uname
            }
            var mi="aw5r785sd1s5ada7r8ewada";
            var token=jwt.sign(obj,mi)
            var userdemo=new dbCollection({
                uname,
                upwd:md5Pwd,
                uemail,
                //存储token
                token
            })
            //cun
            userdemo.save().then((ok)=>{
                res.send({mes:"注册成功",status:200,linkid:1,token,uname,uemail})
            },(err)=>{
                res.send({mes:"注册失败",status:500,linkid:2})
            })
        }

    })
})

app.post("/login",uE,function(req,res){
    mongoose.connect("mongodb://localhost:27017/bb",{useNewUrlParser:true},function(err){
        if(err){
            console.log("数据库连接失败");
        }else{
            console.log("数据库连接成功");
            // 获取数据(密码就是获取到的token)
            let uemail = req.body.uemail;
            let upwd = req.body.upwd;
            // 加密
            // let md5Pass=crypto.createHash('md5').update(uPass).digest('hex');
            
            dbCollection.find({uemail:uemail,token:upwd}).then((ok)=>{
                console.log("查询成功");
                if(ok.length==0){
                    res.send({status:200,mes:"用户不存在",linkid:1})
                }else if(ok.length == 1){
                    res.send({status:200,mes:"用户存在",linkid:0,uemail:uemail})
                }
            },(err)=>{
                res.send({status:500,mes:"查询超时",linkid:3}) 
            })
        }
    })
})
app.listen(3000)