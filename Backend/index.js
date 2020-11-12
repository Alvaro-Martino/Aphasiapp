const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


//const { mongoose } = require('./database');

//settings
//app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

//routes
app.use('/api/user', require('./routes/user.routes'));

/*//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});*/

mongoose
  .connect(
    'mongodb+srv://tomipicci:ePQ4hUrrZOj4x4kV@cluster0.tkqfl.mongodb.net/afasia?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(3000);
    console.log('Mongo conectado pa');
  })
  .catch(err => {
    console.log(err);
  });
  