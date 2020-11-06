const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-Aphasia'


//mongoose.connect(URI)
//    .then(db => console.log('DB is connected'))
//   .catch(err => console.error(err));


mongoose.connect('mongodb+srv://tomipicci:tomi1234@cluster0.tkqfl.mongodb.net/afasia?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => console.log(`Mongo connected`))
    .catch(err => console.log(`Connection has error ${err}`));



module.exports = mongoose;