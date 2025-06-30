//require requires commonjs as type
//import requires module as type
//go to .env or .env.sample to know the whole kundly/sensetive data of a project (443 23 80)
//route starts with /
//use dotenv to import env variables
//study about cors
//express now aceepts json by the app.use(express.json())
//accepts {%20} mean urlencoding
//mongoose help you talk to the database its kind of a oda or orm
//remove all thing after the ? in the mongodb dirver url as its not important to load the drivers 

// ✅ Use ESM-style imports
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import db from './utils/db.js'; // Add .js for ES module compatibility

// ✅ Load env variables
dotenv.config();

// ✅ Set up Express app
const app = express();
const port = process.env.PORT || 4000;

// ✅ Enable CORS
app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// ✅ Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// ✅ Connect to DB
db();

// ✅ Start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});