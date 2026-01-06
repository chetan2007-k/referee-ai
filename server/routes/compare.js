const express = require("express");
const router = express.Router();
const compareOptions = require("../logic/referee");
const getOllamaExplanation = require("../logic/ollamaReferee");

// Browser test
router.get("/test", (req, res) => {
  res.json({ message: "COMPARE ROUTE WORKING" });
});

// Frontend + AI
router.post("/", async (req, res) => {
  const userConstraints = req.body;
  const comparison = compareOptions(userConstraints);

  const explanation = await getOllamaExplanation(
    userConstraints,
    comparison
  );

  res.json({
    constraints: userConstraints,
    comparison,
    explanation
  });
});

module.exports = router;
