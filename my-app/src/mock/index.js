let Mock=require("mockjs")
Mock.mock("/list","get",require("./json/index.json"))
Mock.mock("/movie","get",require("./json/movie.json"))