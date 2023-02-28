const cp = require("child_process")
const http = require("http"),
    fs = require("fs"),
    ini = require('ini'),
    path = require("path")
let filePath = path.join(path.dirname(process.execPath),"config.ini")
const config = ini.parse(fs.readFileSync(filePath, 'utf-8'))
console.log(config.ros)
function handle(req,res){
    if(req.method==="GET"){
        let url = new URL("http://192.168.2.35:3000"+req.url)
        let prarment = url.searchParams
        let port = prarment.get("port")
        let name = prarment.get("passwd")
        let interFace  = prarment.get("interface")
        console.log(name);
        console.log(interFace)
        console.log(config.ros.password);
        if (name !== config.ros.password){
            console.log("not")
            res.end("not")
            return;
        }
        try{
            cp.execSync(`wg set ${interFace} listen-port ${port}`)
        }catch(e){
            console.log(e)
        }

        // cp.execSync(`wg-quick down ${config.ros.interface}`)
        // cp.execSync(`wg-quick up ${config.ros.interface}`)

        // let content = fs.readFileSync("./tset.html")
        console.log(port)
        res.end("ok")
        return;
    }
}


http.createServer(handle).listen(config.ros.port)
