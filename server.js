const express = require('express');
const exphbs = require('express-handlebars'); 
const path = require('path');

const app = express();
const port = 3000;

//Handlebars
const hbs = exphbs.create({
    extname: 'handlebars',
});

app.engine('handlebars', hbs.engine); 
app.set('view engine', 'handlebars');

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//render main.handlebars
app.get('/', (req, res) => {
    res.render('layouts/main', { pageTitle: 'My Movie Review Website' });
});

//server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
