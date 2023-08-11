const axios = require('axios'); 

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                query: 'Barbie',
                api_key: '278e8c312301aad59f629f56b6f2532a',
            },
        });

        const movies = response.data.results;

        res.render('layouts/main', { pageTitle: 'My Movie Review Website', movies });
    } catch (error) {
        console.error('Error fetching data from API:', error);
        res.status(500).send('Error fetching data from API');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
