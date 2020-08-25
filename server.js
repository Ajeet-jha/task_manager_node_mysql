const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const result = require("dotenv").config();
if (result.error) {
  throw result.error;
}
// console.log(result.parsed)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/", require("./routes/pages"));
app.use("/v1/auth", require("./routes/v1/auth"));

app.listen(process.env.SERVER_PORT || 4000, () => {
  console.log(`App Started on PORT ${process.env.SERVER_PORT || 4000}`);
});
