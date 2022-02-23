const express = require("express")
const fs = require("fs")
const app = express();

const nav = fs.readFileSync("./public/components/nav.html").toString();
const scripts = fs.readFileSync("./public/components/scripts.html").toString();
const frontPage = fs.readFileSync("./public/pages/index.html").toString();
const terminalPage = fs.readFileSync("./public/pages/terminal.html").toString();
const toolPage = fs.readFileSync("./public/pages/tools.html").toString();

const frontPagePage = nav.replace('%%HOME%%', 'active') + frontPage + scripts;
const terminalPagePage = nav.replace('%%TERMINAL%%', 'active') + terminalPage + scripts;
const toolPagePage = nav.replace('%%TOOLS%%', 'active') + toolPage + scripts;

app.use(express.static('public'));

app.get("/", (req, res) =>{
    res.send(frontPagePage)
})

app.get("/terminal-commands", (req, res) =>{
    res.send(terminalPagePage)
})

app.get("/tools", (req, res) =>{
    res.send(toolPagePage)
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });


  