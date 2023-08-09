"use strict";
const express = require('express');
const app = express();
const uuid = require('uuid');

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;

const SSLCommerzPayment = require('sslcommerz-lts');
const store_id = process.env.STORE_ID
const store_passwd = process.env.STORE_SECRET
const is_live = false //true for live, false for sandbox

app.use(express.json());

async function pinger(){
    // write me a simple fetch request at localhost:3000/ping
    setInterval(() => {
        fetch('https://fleetology-auth.onrender.com')
        .then(res => console.log('ping'))   
        .catch(err => console.log(err));
    }, 3000);
    
}


app.get("/", async (req,res) =>{
    await pinger();
    res.send("Hello World")
})
app.post("/", (req,res)=>{
    // required
    // name, email, phone, amount
    const data = {
        total_amount: req.body.amount,
        currency: 'BDT',
        tran_id: uuid.v4(), // use unique tran_id for each api call
        success_url: 'http://localhost:3000/success',
        fail_url: 'http://localhost:3000/fail',
        cancel_url: 'http://localhost:3000/cancel',
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
    console.log(`Server is running on port ${port}`);
})