const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 8080; // Change this to your desired port number

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, "")));

// Define a route to serve HTML files without the ".html" extension
app.get("/:page", (req, res) => {
  const page = req.params.page;
  const filePath = path.join(__dirname, `${page}.html`);
  const errorPath = path.join(__dirname, `error.html`);
  fs.exists(filePath, (exists) => {
    if (exists) {
      res.sendFile(filePath);
    } else {
      res.status(404).sendFile(errorPath);
    }
  });
});
app.get("*", (req, res) => {
  const errorPath = path.join(__dirname, `error.html`);
  res.status(404).sendFile(errorPath);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
