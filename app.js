const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

const nav = fs.readFileSync("./public/components/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();
const home = fs.readFileSync("./public/pages/index.html").toString();
const javascriptBasics = fs.readFileSync("./public/pages/basics.html").toString();
const terminalCommands = fs.readFileSync("./public/pages/terminal.html").toString();
const tools = fs.readFileSync("./public/pages/tools.html").toString();
const restAPI = fs.readFileSync("./public/pages/rest.html").toString();
const ssr = fs.readFileSync("./public/pages/ssr.html").toString();


const homePage = nav.replace('%%HOME%%', 'active') + home + footer;
const javascriptBasicsPage = nav.replace('%%BASICS%%', 'active') + javascriptBasics + footer;
const terminalCommandsPage = nav.replace('%%TERMINAL%%', 'active') + terminalCommands + footer;
const toolsPage = nav.replace('%%TOOLS%%', 'active') + tools + footer;
const restAPIPage = nav.replace('%%REST%%', 'active') + restAPI + footer;
const ssrPage = nav.replace('%%SSR%%', 'active') + ssr + footer;


app.use(express.static('public'));

app.get("/", (req, res) =>{
    res.send(homePage);
})

app.get("/javascript-basics", (req, res) =>{
    res.send(javascriptBasicsPage);
})

app.get("/terminal-commands", (req, res) =>{
    res.send(terminalCommandsPage);
})

app.get("/tools", (req, res) =>{
    res.send(toolsPage);
})

app.get("/rest", (req, res) =>{
    res.send(restAPIPage);
})

app.get("/ssr", (req, res) =>{
    res.send(ssrPage)
})

app.listen(PORT, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });


  