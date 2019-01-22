const express = require('express');
const app = express();
const fs = require('fs');

const template = require('./template/temp.js') 
//temp(header(), section(), footer)
//-+ header(hint)
//-+ section(getNav)
//---+ <script src="contents.js"></script>
//--+ footer
const header = require('./template/header.js') 
const section = require('./template/section.js') 
const footer = require('./template/footer.js')

app.use(express.static('template'));

app.get('/',(req,res)=>{
        fs.readFile('./lib/googleGame.json', (err,data)=>{
        if(err){throw err}
        else{
            const json = JSON.parse(data.toString());
            res.send(template(header('유튜브'), section(json.game), footer));
        };
    });
});

app.get('/:load',(req,res)=>{
    fs.readFile('./lib/googleGame.json', (err,data)=>{
        if(err){throw err}
        else{
            const json = JSON.parse(data.toString());
            res.send(template(header(req.params.load), section(json.game), footer));
        };
    });
})

app.listen(3000,(req,res)=>{
    console.log("Helo")
});
