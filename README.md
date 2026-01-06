# 🧠 The Referee

**The Referee** is a constraint-based decision-support tool that helps users compare options and understand trade-offs instead of receiving a single recommendation.

Rather than letting AI decide, the system uses **rule-based scoring** for transparency and **AI only to explain trade-offs**, keeping users in control.

---

## 🎯 Key Features

- Constraint-driven comparison
- Transparent rule-based evaluation
- AI-generated trade-off explanations
- No forced “best” choice
- Local AI support via Ollama (Mistral)

---

## 🏗️ Architecture

Frontend → Backend → Rule Engine → LLM Explanation

- Rules decide scores  
- AI explains results  
- Users choose

## 🚀 Getting Started

npm install
node server/index.js
client/index.html


📂 Project Structure

referee-ai/
├── .kiro/        # AI-assisted development artifacts
├── client/       # Frontend UI
├── server/       # Backend & logic
├── .gitignore
└── README.md


🧠 Kiro Usage
The .kiro/ directory documents how Kiro accelerated development through:
Idea refinement
Architecture decisions
Debugging support
Prompt iteration

🔍 Example
Given constraints like low budget, beginner skill level, and urgent timeline,
The Referee compares options (e.g., AWS vs Firebase) and explains trade-offs clearly.

