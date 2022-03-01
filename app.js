const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

const nav = fs.readFileSync("./public/components/nav.html").toString();
const scripts = fs.readFileSync("./public/components/scripts.html").toString();
const frontPage = fs.readFileSync("./public/pages/index.html").toString();
const terminalPage = fs.readFileSync("./public/pages/terminal.html").toString();
const toolPage = fs.readFileSync("./public/pages/tools.html").toString();
const restPage = fs.readFileSync("./public/pages/rest.html").toString();
const ssrPage = fs.readFileSync("./public/pages/ssr.html").toString();
const basicsPage = fs.readFileSync("./public/pages/basics.html").toString();

const frontPagePage = nav.replace('%%HOME%%', 'active') + frontPage + scripts;
const terminalPagePage = nav.replace('%%TERMINAL%%', 'active') + terminalPage + scripts;
const toolPagePage = nav.replace('%%TOOLS%%', 'active') + toolPage + scripts;
const restPagePage = nav.replace('%%REST%%', 'active') + restPage + scripts;
const ssrPagePage = nav.replace('%%SSR%%', 'active') + ssrPage + scripts;
const basicsPagePage = nav.replace('%%BASICS%%', 'active') + basicsPage + scripts;

app.use(express.static('public'));

app.get("/", (req, res) =>{
    res.send(frontPagePage);
})

app.get("/javascript-basics", (req, res) =>{
    res.send(basicsPagePage);
})

app.get("/terminal-commands", (req, res) =>{
    res.send(terminalPagePage);
})

app.get("/tools", (req, res) =>{
    res.send(toolPagePage);
})

app.get("/rest", (req, res) =>{
    res.send(restPagePage);
})

app.get("/ssr", (req, res) =>{
    res.send(ssrPagePage)
})

app.listen(PORT, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });


  