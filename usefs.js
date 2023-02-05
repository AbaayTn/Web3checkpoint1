var fs=require('fs')
http.createServer(function(req,res){
    
    fs.readFile('welcome.txt',function(err,data){
        res.write(data)
        res.end()
    })
    }).listen(4000);