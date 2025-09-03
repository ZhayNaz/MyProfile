const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const FILE_PATH = ".../others/Review.txt";

// API to save review
app.post("/add-review", (req, res) => {
    const { review } = req.body;
    if (!review) {
        return res.status(400).json({ error: "Review is required" });
    }

    // Append the review to Review.txt
    fs.appendFile(FILE_PATH, review + "\n", (err) => {
        if (err) {
            return res.status(500).json({ error: "Failed to save review" });
        }
        res.json({ message: "Review added successfully" });
    });
});

// API to get all reviews
app.get("/get-reviews", (req, res) => {
    fs.readFile(FILE_PATH, "utf8", (err, data) => {
        if (err) return res.status(500).json({ error: "Failed to load reviews" });

        const reviews = data.split("\n").filter(line => line.trim() !== ""); // Remove empty lines
        res.json(reviews);
    });
});


// Start server
app.listen(3000, () => console.log("Server running on port 3000"));
