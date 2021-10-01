const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const port = 3000;
const app = express();

app.use(express.json({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

app.listen(port,(err)=>{
  if(err) {
    console.log(err);
  }
  console.log(`Server running at port ${port}`);
});