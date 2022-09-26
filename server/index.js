import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);

// mongo db configuration
const CONNECTION_URL = 'mongodb+srv://admin:0wDT17w1XgYmtw40@cluster0.gbh9r99.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
        .then (() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
        .catch((err)=>console.error(err.message));

