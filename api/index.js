import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/auth.route.js'

mongoose.connect('mongodb://localhost:27017/mern-blog').then(() => {
    console.log('MongoDb is connected');
}).catch((err) => {
    console.log(err);
 });

const app = express();

app.use(express.json( )); // Middleware for parsing JSON

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/test', (reg,res) => {
    res.json({message: 'API is working!'});
})

app.get('/api/auth', authRouter);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
  
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });    
});