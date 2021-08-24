const express = require('express')
const app = express()
const path = require('path')
const readLastLines = require('read-last-lines');
const exec = require('child_process').exec;

app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)
app.set('views', path.join(__dirname, 'views'))
let instance1
let instance2

setInterval(() => {
    readLastLines.read("log.txt", 4).then((lines) => {
    let info = lines.split(/\r?\n/)
    console.log(info)
    console.log(info.length)
    for (let i = 0; i < info.length; i++) {
        console.log(info[0])
        if(info[i] === 'instancia2'){
            if(info[i + 1] === 'hola xddd'){
                console.log('instancia 2 fuunciona')
                this.instance2 = true
            }else{
                console.log('instancia 2 no funciona')
                this.instance2 = false
            }
        } else if(info[i] === 'instancia1'){
            if(info[i + 1] === 'hola asdasdsa'){
                console.log('instancia 1 fuunciona')
                this.instance1 = true
            }else{
                console.log('instancia 1 no funciona')
                this.instance1 = false
            }
        }
    }
    })
}, 2000)

app.get('/', (req, res) => {
    res.render('index.html', {
        instance1: this.instance1,
        instance2: this.instance2
    })
})

function executeCurlScript(){
    exec('sh curl_script.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
    });
}


app.listen(3000, () => console.log('App run on port 3000!'))