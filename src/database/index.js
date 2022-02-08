const mongoose = require('mongoose');


function connect() {
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }).then((res, err) => {
      if (err) return reject(err);
      resolve();
    })
  })
};

function close() {
  return mongoose.disconnect();
};


module.exports = { connect, close };

