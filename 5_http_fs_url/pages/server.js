const http=require("http")
const fs=require("fs")
const url=require("url")
const app=http.createServer((req,res)=>{
    const newurl = url.parse(req.url);
    console.log(newurl);
    if(newurl.pathname == "/"){
        fs.readFile("index.html",(error,data)=>{
            if(error){
                res.writeHead(404,{"content-type":"text/html"})
                return res.end("page not found")
            }
            res.writeHead(200,{"content-type":"text/html"})
            res.write(data)
            res.end();
        });
        } else if(newurl.pathname == "/contact"){
            fs.readFile("contact.html",(error,data)=>{
                if(error){
                    res.writeHead(404,{"content-type":"text/html"})
                    return res.end("page not found")
                }
                res.writeHead(200,{"content-type":"text/html"})
                res.write(data)
                res.end();
            });
        }else {
            fs.readFile("error.html",(error,data)=>{
                if(error){
                    res.writeHead(404,{"content-type":"text/html"})
                    return res.end("page not found")
                }
                res.writeHead(200,{"content-type":"text/html"})
                res.write(data)
                res.end();
            });
        }
})
app.listen(4000)