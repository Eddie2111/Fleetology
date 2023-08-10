"use strict";
const express = require('express');
const app = express();
const uuid = require('uuid');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();

const port = process.env.PORT || 3000;

const SSLCommerzPayment = require('sslcommerz-lts');
const store_id = process.env.STORE_ID
const store_passwd = process.env.STORE_SECRET
const is_live = false //true for live, false for sandbox

app.use(express.json());
app.use(cors(
    {
        origin: '*',
        methods: ['GET','POST','PUT','DELETE'],
        allowedHeaders: ['Content-Type','Authorization']
    }
))

async function ping(){
    fetch(process.env.PINGER)
    .then(res => console.log('ll'))
    .catch(err => console.log(err));
}

async function pinger(){
    setInterval(() => {
        axios.get('https://fleetology-auth.onrender.com')
        .then(res => console.log())   
        .catch(err => console.log(err));
    }, 15000);
    
}
app.get("/ping",(req,res)=>{
    try{
        setInterval(() => {
            fetch(process.env.PINGER).then(res => console.log('lame')).catch(err => console.log(err));
        }, 6000);
        res.send("Pinged")
    }
    catch(err){
        console.log(err);
        res.send("Error")
    }
})

app.get("/", async (req,res) =>{
    try{ await pinger(); }
    catch(err){ console.log(err); }
    res.send("Hello World")
})
app.post("/", (req,res)=>{
    // required
    // name, email, phone, amount
    const amount = req.body.amount;
    //convert amount to int

    const data = {
        total_amount: parseInt(amount),
        currency: 'BDT',
        tran_id: uuid.v4(), // use unique tran_id for each api call
        success_url: process.env.SUCCESS,
        fail_url: process.env.FAIL,
        cancel_url: process.env.CANCEL,
        ipn_url: 'http://localhost:3000/ipn',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Service',
        product_profile: 'general',
        cus_name: req.body.name,
        cus_email: req.body.email,
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: req.body.phone,
        cus_fax: req.body.phone,
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    sslcz.init(data).then(apiResponse => {
        // Redirect the user to payment gateway
        console.log(apiResponse)
        let GatewayPageURL = apiResponse.GatewayPageURL
        res.send(apiResponse.GatewayPageURL)
        console.log('Redirecting to: ', GatewayPageURL)
    })
    .catch((err)=>console.log(err));
    // res.json({
    //     status:200,
    //     message:"Hello World",
    //     data: req.body
    // })
})

app.listen(port, ()=>{
    try{pinger();}
    catch(err){console.log(err);}
    console.log(`Server is running on port ${port}`);
})