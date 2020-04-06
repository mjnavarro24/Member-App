//const http = require('http');

const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');
// const expressValidator = require('express-validator');
const logger = require('./middleware/logger');

const members = require('./Members');
//Initialize express
const app = express();



//Init Middleware
// app.use(logger);

//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Homepage route
app.get('/', (req, res) => res.render('index', {title: 'Member App', members}));


// //Set Static Path
app.use(express.static(path.join(__dirname, 'public')));


// Members API Routes
app.use('/api/members', require('./routes/api/members'))


//Listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})




//Quote generator code

// const Quotes = ["Hope you have a good day!", "What's for late night", "Should I leave or stay", "What are you doing during quarantine?", "What's your favorite food"];

// const getRandomNumber = (max) => Math.floor(Math.random()*max);

// const getRandomQuote = () => `${Quotes[getRandomNumber(Quotes.length)]}`;

// console.log(getRandomQuote());

// const setRandomQuote = () => {document.getElementById('random-quote').innerText = getRandomQuote();
// }
// document.getElementById('generate').addEventListener('click', setRandomQuote);

// setRandomQuote();


