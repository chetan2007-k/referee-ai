async function getOllamaExplanation(constraints, comparison) {
  const prompt = `
You are a neutral decision referee.

User constraints:
${JSON.stringify(constraints, null, 2)}

Comparison results:
${JSON.stringify(comparison, null, 2)}

Explain:
- Strengths of each option
- Weaknesses of each option
- Trade-offs
- Conditional guidance (do not choose for the user)
`;

  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "mistral",   // ✅ THIS IS KEY
      prompt: prompt,
      stream: false
    })
  });

  const data = await response.json();
  return data.response;
}

module.exports = getOllamaExplanation;


/*
Important:
- Do not state that one option is better overall.
- Frame guidance strictly as "If X matters → choose Y".
*/