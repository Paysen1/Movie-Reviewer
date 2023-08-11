const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

// Configure Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// route to render main.handlebars
app.get('/', (req, res) => {
    res.render('layouts/main', { pageTitle: 'My Movie Review Website' });
});

// server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
