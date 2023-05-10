// server/index.js

const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3001;

const app = express();

const DATA = [
  {id: "todo-0", name: "Eat", completed: true},
  {id: "todo-1", name: "Sleep", completed: false},
  {id: "todo-2", name: "Repeat", completed: false}
];

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.post("/postData", (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
  console.log(req.body);
});



app.get("/data", (req, res) => {
    res.json(DATA);
    console.log("Data has been fetched at /data api point")
  });
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
