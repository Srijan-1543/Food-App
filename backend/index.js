const express = require('express');
const mongoDB = require('./db');

const app = express();
const port = 5000;

mongoDB();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(express.json());
app.use('/api',require('./routes/CreateUser'));
app.use('/api',require('./routes/DisplayData'));
<<<<<<< HEAD
app.use('/api',require('./routes/OrderData'));
// app.use('/api/auth', require('./routes/Auth'));
app.get('/',(req,res)=>{
    res.send('Hello World!');
=======
app.get('/',(req,res)=>{
    res.send('Hello World pff');
>>>>>>> 2e2a10fef9a47ec1cd57d9fdf95c071bc9869587
})
app.listen(port,()=>{
    console.log('App Listening on port 5000');
})