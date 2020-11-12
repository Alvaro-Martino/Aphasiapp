const mongoose = require('mongoose');

const URI = 'mongodb://localhost:3000/mean-Aphasia'


//mongoose.connect(URI)
//    .then(db => console.log('DB is connected'))
//   .catch(err => console.error(err));


mongoose.connect('mongodb+srv://tomipicci:ePQ4hUrrZOj4x4kV@cluster0.tkqfl.mongodb.net/afasia?retryWrites=true&w=majority')
    .then(() => console.log(`Mongo connected`))
    .catch(err => console.log(`Connection has error ${err}`));


module.exports = mongoose;
