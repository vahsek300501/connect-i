const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const port = 3000;
const app = express();

app.use(express.json({ extended: false }));
app.use(morgan('dev'));
app.use(cors());
app.set('view engine','ejs');
app.set('views','./views');
// use express router
app.use("/",require("./routes/index"));
app.use("/user",require("./routes/user"));

app.listen(port,(err)=>{
  if(err) {
    console.log(err);
  }
  console.log(`Server running at port ${port}`);
});