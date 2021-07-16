let express = require("express")
let data = require("./data.json")

let server = express() //nya server banadegi but chalu nhi karti h

//ye line server ko shuru kardeti h ek port pr

server.get("/movies",function(req,res){
    res.send(data)
})

server.get("/genre",function(req,res){
   let allGenreObjects = data.map(function(e){
       return e.genre;
    })
       let uniqueGenreObjects = []

       for(let i=0;i<allGenreObjects.length;i++){
           let genreId = allGenreObjects[i]["_id"]
           let index = uniqueGenreObjects.findIndex(function(e){
               return e._id == genreId
           })

           if(index==-1){
               uniqueGenreObjects.push(allGenreObjects[i]);
           }
       }
       res.json(uniqueGenreObjects)
   })


server.listen(4000)
