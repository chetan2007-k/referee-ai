const express = require("express");
const cors = require("cors");

const compareRoute = require("./routes/compare");

const app = express();

// ✅ ENABLE CORS (THIS IS THE FIX)
app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Referee AI Server Running");
});

app.use("/compare", compareRoute);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
