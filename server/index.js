const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "../public")));


app.listen(port, () => {
  console.log(`App backend started. Listening port ${port}`);
});