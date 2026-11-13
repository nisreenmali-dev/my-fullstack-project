const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/greet", (req, res) => {
    const name = req.body.name;

    res.json({
        message: `Hello ${name}! Welcome to Docker.`
    });
});

app.listen(5000, "0.0.0.0", () => {
    console.log("Backend running on port 5000");
});