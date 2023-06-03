const express = require("express");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());
const dotenv = require("dotenv");
dotenv.config({ path: "./module.env" });

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  //   res.send("Hello World");
  res.status(200).json({ message: "Hello world pimp" });
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running,and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
