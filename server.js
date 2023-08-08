const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const port = process.env.PORT || 4000;
 
//middleware to Parse the json Data from the body
app.use(express.json());


//Import Routes for Todo Api
const todoRoutes = require("./routes/todos")

//mount the Todo api routes
app.use("/api/v1" , todoRoutes);

//coonect to the database
const dbConnect = require('./config/database');
dbConnect()

//default raoutes
app.get('/' , (req ,res) => {
  res.send("<h1>This is Home page</h1>")
})

//start server
app.listen(port, () => {
  console.log(`server started at 3000: ${port}`);
});




// app.get("/", (req, res) => {
//   res.send("Hello ::");
// });

// app.post("/api/cars", (req, res) => {
//   const { name, brand } = req.body;
//   console.log(name);
//   console.log(brand);
//   res.send("Car submmited successfully ");
// });