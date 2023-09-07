const express = require("express");
const path = require("path");
const app = express();

const port = 800;


//11:18

const Data =[
    {
        name:"sahitya",
        class:"ece",
    },
    {
        name: "honey",
        class: "ece",
    }
]

let date = new Date();

const Time = {
    d: date.getDate(),
    m: date.getDate(),
    t: date.toLocaleDateString(),
    s:date.getMilliseconds(),
}


app.get("/s",(req,res)=>{
res.status(200).send("jai mata di");
})


app.get('/api/v1/:name',(req,res)=>{

    let flag = true;
    let {name} = req.params;
    Data.forEach((ele)=>{
        if(ele.name === `${name}`) {
            res.status(200).json({...ele});
            flag = false;
        }
       
    })
    if (flag) res.status(404).send("Not Found!!!");
})


// console.log("date",new Date());

// console.log();

app.listen(port,()=>{
    console.log("app is listening on ",port ,"  👍");
})