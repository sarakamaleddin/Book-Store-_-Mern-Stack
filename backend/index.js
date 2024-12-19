import express from "express";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { trusted } from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// Middleware for parsing request body as JSON
app.use(express.json());

// Middleware for handling CORS policy
// Option 1: Allow all origins with default of cors (*)
app.use(cors());

// Option 2:Allow Custom Origin
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: [`GET`, `POST`, `PUT`, `DELETE`],
//         allowedHeaders: ['Content-Type'],
//     })
// )

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to MERN Stack BOOK STORE');
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App is connected to the database');
        app.listen(PORT, () => {
            console.log(`App is listening to the port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });