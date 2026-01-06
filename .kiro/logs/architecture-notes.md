# Architecture Notes: The Referee System

## System Overview

"The Referee" is a web-based decision support tool that helps users evaluate options based on personal constraints. The system combines rule-based scoring with AI-generated explanations to provide transparent, constraint-aware recommendations.

## Core Components

### 1. Frontend (Client)
- **Technology**: HTML, CSS, JavaScript (vanilla for simplicity)
- **Responsibilities**: User interface for inputting constraints; displaying results and explanations
- **Architecture**: Single-page application with form submission to backend API

### 2. Backend (Server)
- **Technology**: Node.js with Express.js
- **Responsibilities**: API endpoints; request routing; integration with logic and AI components
- **Structure**:
  - `index.js`: Main server file with middleware and route mounting
  - `routes/`: Modular route handlers (e.g., compare.js for decision logic)
  - `logic/`: Core business logic and AI integration
  - `data/`: Static data files (options.json)

### 3. Rule Engine
- **Location**: `logic/referee.js`
- **Function**: Evaluates options against user constraints using weighted scoring
- **Algorithm**: For each option, calculates score based on matching constraints (budget, skill, timeline, scale)
- **Output**: Ranked list with scores and reasoning factors

### 4. AI Explanation Module
- **Location**: `logic/aiReferee.js` or `ollamaReferee.js`
- **Technology**: Ollama with Mistral-7B local LLM
- **Purpose**: Generates natural language explanations of rule-based results
- **Integration**: Called after rule engine; receives scores and constraints as input

## Separation of Concerns

- **Data Layer**: JSON files for option definitions (easily modifiable)
- **Logic Layer**: Pure functions for scoring (testable, deterministic)
- **AI Layer**: Isolated for explanation generation (can be disabled or replaced)
- **Presentation Layer**: Clean API responses for frontend consumption

## Why AI is Used Only for Explanation

1. **Reliability**: Core decisions remain deterministic and explainable through rules
2. **Performance**: Rule-based scoring is fast and doesn't require network calls
3. **Cost**: Local LLM reduces costs and privacy concerns
4. **User Trust**: Users see both numerical scores and AI explanations, providing multiple validation paths
5. **Flexibility**: AI can be enhanced or replaced without affecting core logic

## Data Flow

1. User submits constraints via POST /compare
2. Backend parses request and calls rule engine
3. Rule engine scores options and returns results
4. AI module generates explanations for top results
5. Backend combines rule results with AI explanations
6. JSON response sent to frontend

## Scalability Considerations

- Rule engine can handle increased option sets linearly
- AI calls are batched and cached where possible
- Modular design allows horizontal scaling of backend services
- Local LLM choice ensures offline capability

This architecture balances simplicity for rapid development with extensibility for future enhancements.