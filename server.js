let express = require("express")
let server = express() //nya server banadegi but chalu nhi karti h

//ye line server ko shuru kardeti h ek port pr

server.get("/movies",function(req,res){
    res.send("movies data from server")
})

server.get("/genre",function(req,res){
    res.send("genre data from server")
})

server.listen(3000)
