const fs = require("node:fs");
const http = require('node:http');
console.log(fs, http)



const PORT = 3000;
const servidor = http.createServer(function(req, res){
  if(req.url === '/'){
res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./docs/index.html','utf-8', function(err, arquivo){
if(err){
  console.error("Errouu...: ", + err)
}else {
fs.readFile('./docs/index.html','utf-8', function(err, arquivo){

  
}
            




  
}
      
    }

    
  }
