const mongoose = require("mongoose");

require("dotenv").config();

// connect mongoose to databse or create DB
const dbConnect = () => {

    mongoose
      .connect(process.env.DATABASE_URL, {
        useNewurlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("successfully connected DB");
      })
      .catch((error) => {
        console.log("Error recived");
        console.error(error);
        process.exit(1); 
      });
}

//export database
module.exports = dbConnect;