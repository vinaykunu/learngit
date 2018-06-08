// index.js
//0 /5  * * * for every five minute
const cron = require("node-cron");
const express = require("express");
const fs = require("fs");

app = express();

// schedule tasks to be run on the server
cron.schedule("* */1 * * *", function() {
  console.log("---------------------");
  console.log("Running Cron Job");
  /*fs.unlink("./error.log", err => {
 if (err) throw err;
 console.log("Error file succesfully deleted");
  });*/
});

app.listen("3128");//we can close this without listen also work cron