import express from "express";
const app = express();

// Serve static files from the 'src' directory
app.use(express.static("src"));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
