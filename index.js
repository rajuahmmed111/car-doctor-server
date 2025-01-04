const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
