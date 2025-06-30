// utils/db.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const db = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.error("Error connecting to MongoDB:", err.message);
        });
};

export default db;
