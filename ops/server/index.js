const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const offer_routes_user = require("../server/routes/offer_routes_user")
const offer_routes_coupon = require("../server/routes/offer_route_coupon")
const user_creat_coupons = require("../server/routes/user_creat_coupons")
const player_disp  = require("../server/routes/player_display")

const SERVER_PORT = process.env.PORT||8081;
const app = express()

const DB = 'mongodb+srv://rahul:rahul@cluster0.8efe9kh.mongodb.net/ops?retryWrites=true&w=majority'

//middleware
app.use(bodyParser.json())
app.use(cors())


// connections
mongoose.connect(DB).then(()=>{console.log("connected to mongoose atlas")}).catch((err)=>{console.log(err,"no connection")});


// routes
app.use("/api/offer",offer_routes_user)
app.use("/api/offer",offer_routes_coupon)
app.use("/api/offer",user_creat_coupons)
app.use("/api/offer",player_disp)


//server
app.listen(SERVER_PORT,(()=>{
    console.log(`server ${SERVER_PORT}`)
}))


