import express from 'express'; 
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import postRoutes from './routes/posts.js'

const app = express(); 

app.use(express.json())

app.use('/api/posts/', postRoutes)

dotenv.config()
const port = process.env.PORT;

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);

        mongoose.connect(process.env.MONGO_URI, {
            
        });
        console.log('Mongo DB Connected!')
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB().then(() => {
    app.listen(port,() => console.log(`listening on port ${port}`))
}).catch(err => console.log(err))
 

