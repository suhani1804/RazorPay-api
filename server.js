const express = require ('express');
const app = express();
const razorpay= require('razorpay');
const expressLayouts = require('express-ejs-layouts');
const port =3000;

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use('/', require('./routes/index'));
app.use('/checkout', require('./routes/razorpay'))

app.listen(port, (req,res)=>
{
    console.log(`Server is running at port ${port}`);
})


