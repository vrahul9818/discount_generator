const bodyParser = require("body-parser");
const express = require("express");
var jwt = require('jsonwebtoken');
const cors = require('cors')


const SECRET_ID = "j";
const app = express();
app.use(bodyParser.json());
app.use(cors());

const router = express.Router();

router.post("/display", ((req,res)=>{
    // console.log(req.body)
    const decoded = jwt.verify(req.body.token,SECRET_ID)
    try{
        
        res.send("authenticated")
    }
    catch(err){
        res.send("not authenticated")

    }
}))

module.exports = router;