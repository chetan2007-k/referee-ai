require("dotenv").config();

async function explainDecision(constraints, comparison) {
  const prompt = `
You are a neutral decision referee.

User constraints:
${JSON.stringify(constraints, null, 2)}

Option comparison:
${JSON.stringify(comparison, null, 2)}

Explain:
1. What each option is good at
2. What each option struggles with
3. The key trade-offs
4. Conditional guidance (DO NOT choose for the user)

Be concise, neutral, and transparent.
`;

  // Placeholder (no API call yet)
  return {
    explanation: "AI explanation layer connected. Prompt ready."
  };
}

module.exports = explainDecision;
