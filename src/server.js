require('dotenv').config({});
const app = require('./app');
const { cron } = require('./cron/cron');
const db = require('./database/index');
const PORT = 3001;



db.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server ir running on port: ${PORT}`);
    });
  });
