const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const expressLayouts = require("express-ejs-layouts");
const port = 3000;
const app = express();
const mongooose = require("./config/config").db;

app.use(express.json({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

// setting static files that is css and javascripts
app.use(express.static('./assets'));

app.use(expressLayouts);
// extract styles and scripts from subpages into the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine','ejs');
app.set('views','./views'); 

// use express router
app.use("/",require("./routes/index"));

app.listen(port,(err)=>{
  if(err) {
    console.log(err);
  }
  console.log(`Server running at port ${port}`);
});