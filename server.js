const express  = require ('express');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const portfolio = express();

portfolio.use(express.json());

portfolio.get('/api/portfolio', (_, res) => {
    res.send({
        msg: 'Ceci est un test !'
    })
})

portfolio.listen(PORT, () => {
    console.log(`Server lancé sur le port ${PORT}`);
});

