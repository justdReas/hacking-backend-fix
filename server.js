const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const app = express();
app.use(helmet());
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).send("You did it!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
