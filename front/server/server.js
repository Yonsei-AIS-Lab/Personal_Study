const express = require('express') 
const app = express() 
const port = 3001 // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send('실행중!')
})

app.post("/id", (req,res)=>{ //데이터 받는곳
    const serverid = req.body.plzid;
    console.log(serverid);
});

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`); //esc버튼 밑의 `다.
})