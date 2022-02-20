const express = require("express")
const path = require("path")
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html");
})

app.get("/terminal-commands", (req, res) =>{
    res.sendFile(__dirname + "/public/terminal.html")
})

app.get("/tools", (req, res) =>{
    res.sendFile(__dirname + "/public/tools.html")
})

app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
