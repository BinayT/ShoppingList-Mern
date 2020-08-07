const express = require("express");
const mongoose = require("mongoose");

const items = require("./routes/api/items");

const app = express();

app.use(express.json());

//DB Config
const db = require("./config/keys.js").mongoURI;

//Connect to mongodb
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//routes
app.use("/api/items", items);

//PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on port " + PORT));
