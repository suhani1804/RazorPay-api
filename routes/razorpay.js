const express = require('express');
const router = express.Router();
const razorpay = require('razorpay');

const instance = new razorpay({
    key_id:'rzp_test_c5JskAcPj0fYD6',
    key_secret: 'X3ART4JdWYX0onRK1cY564cI'
})

router.get('/', (req,res)=>
{
     var options=
        {
            amount:153*100, //amount in smallest currency unit
            currency:'INR',
        };
    instance.orders.create(options, function(order,error)
    {
        if(error)
        {
            console.log(error);
        }
        else{
            console.log(order);
            res.send(order.id);
            
        }

    })
     
});

module.exports = router;