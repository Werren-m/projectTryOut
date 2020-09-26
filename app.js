<<<<<<< HEAD
//comment

//werren-dev
=======
const express = require('express');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 3000;

const router = require('./routes')

//Middlewares
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Routes
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running at port : ${PORT}`);
});

>>>>>>> 400d237e9fe598e6eeca822f627f213dec8ce952
