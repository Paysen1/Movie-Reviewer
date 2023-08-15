const axios = require('axios'); 
const express = require('express');
const app = express();
const port = 4000;
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                query: 'Barbie',
                api_key: '278e8c312301aad59f629f56b6f2532a',
            },
        });

        const movies = response.data.results;
        console.log('movies', movies)
        res.render('test', { movies });
    } catch (error) {
        console.error('Error fetching data from API:', error);
        res.status(500).send('Error fetching data from API');
    }
});

router.get('/test-api', async (req, res) => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                query: 'Barbie',
                api_key: '278e8c312301aad59f629f56b6f2532a',
            },
        });

        const movies = response.data.results;

        res.render('page', { pageTitle: 'Test API Page', movies });
    } catch (error) {
        console.error('Error fetching data from API:', error);
        res.status(500).send('Error fetching data from API');
    }
});

module.exports = router;

// Start the server
// //app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });//
