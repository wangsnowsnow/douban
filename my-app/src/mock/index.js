let Mock=require("mockjs")
Mock.mock("/list","get",require("./json/index.json"))
Mock.mock("/movie","get",require("./json/movie.json"))
Mock.mock("/slide","get",require("./json/slide.json"))
Mock.mock("/slidemovie","get",require("./json/slidemovie.json"))
Mock.mock("/book","get",require("./json/book.json"))
Mock.mock("/findmovie","get",require("./json/findmovie.json"))
Mock.mock("/groupa","get",require("./json/groupa.json"))