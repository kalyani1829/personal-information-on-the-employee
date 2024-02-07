const express = require("express");
const app = express();
app.use(express.json()); // for parsing application/json

app.get("/add-user", (req, resp) =>{
    resp.send("hello")

});
app.listen (1829,()=> {
    
})