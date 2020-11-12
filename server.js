// 1. Require express
const express = require("express");
const path = require("path");

// 2. Create instance of express
const app = express();

// 3. Set the PORT
const PORT = process.env.PORT || 3000;

// 5. Add Middleware (this is minimum)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 4. Listen on the PORT
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});