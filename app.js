 const express = require('express');
 const app = express();
 const PORT = 5000;
 const MYRoute = require("./routes/users");
 const mongoose = require("mongoose");

 app.use(express.json());

 app.use('/api/products', MYRoute);

 async function init() {
     try{
         const options = {useNewUrlParser: true, useUnifiedTopology: true}
         await mongoose.connect("mongodb://localhost:27017/mongoosebasics", options);
         console.log("Connected to database");
     }catch(error){
         console.error(error)
     }
     app.listen(PORT, () => console.log(`Server is up and running on port: ${PORT}`))
 }

 init();

