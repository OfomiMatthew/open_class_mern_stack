const express = require('express')

const app = express ()

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.post('/api/stuff',(req,res,next)=>{
  console.log(req.body)
  res.status(201).json({"message":"new item created"})
  next();
})

app.get('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'My first thing',
      description: 'All of the info about my first thing',
      imageUrl: 'https://images.pexels.com/photos/18011894/pexels-photo-18011894/free-photo-of-tea-glasses-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'My second thing',
      description: 'All of the info about my second thing',
      imageUrl: 'https://images.pexels.com/photos/7490540/pexels-photo-7490540.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      price: 2900,
      userId: 'qsomihvqios',
    },

    {
      _id: 'oeihfzsksihi',
      title: 'My third thing',
      description: 'All of the info about my third thing',
      imageUrl: 'https://images.pexels.com/photos/19748403/pexels-photo-19748403/free-photo-of-a-red-and-white-striped-tent-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      price: 2900,
      userId: 'qsojdkjsksk',
    },
  ];
  res.status(200).json(stuff);
});
module.exports = app;