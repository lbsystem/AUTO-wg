const cp = require("child_process")
const http = require("http"),
    fs = require("fs"),
    ini = require('ini')

const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'))
console.log(config.ros)

function handle(req,res){
    if(req.method==="GET"){
        let url = new URL("http://192.168.2.35:3000"+req.url)
        let prarment = url.searchParams
        let port = prarment.get("port")
        let name = prarment.get("passwd")
        let interface  = prarment.get("interface")
        console.log(name);
        console.log(config.ros.password);
        if (name !== config.ros.password){
            console.log("not")
            res.end("not")
            return;
        }
        cp.execSync(`wg set ${interface} listen-port ${port}`)
        // cp.execSync(`wg-quick down ${config.ros.interface}`)
        // cp.execSync(`wg-quick up ${config.ros.interface}`)
       
        // let content = fs.readFileSync("./tset.html")
        console.log(port)
        res.end("ok")
        return;
    }
}


http.createServer(handle).listen(config.ros.port)
