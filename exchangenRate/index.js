const express = require ("express");
const { exchangeRates, currencies } = require('exchange-rates-api');
const fetch = require('node-fetch');

const app = express();


const PORT = process.env.PORT || 5000


app.get('/', (req, res)=>{


  const example = async () => {
    await exchangeRates().latest()
        .base(currencies.USD)
        .symbols([currencies.EUR, currencies.GBP])
        .fetch('https://api.exchangeratesapi.io/latest').then((res)=>{
           return res.json();
        })
};

  res.json(example);

});

 

 





app.listen(PORT, () => console.log(`Server started on port ${PORT}`));