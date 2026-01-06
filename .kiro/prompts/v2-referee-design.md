# Prompt Evolution: v2 - Referee Design

## Overview

Version 2 prompts focused on refining the "Referee" concept into a concrete system design. Building on v1 exploration, these prompts addressed implementation details, user experience, and technical architecture.

## Key Prompts Used

### Prompt 1: System Architecture Design
```
Design the architecture for a "Referee" system that evaluates technology options based on user constraints. Include components for:
- User input handling
- Constraint evaluation logic
- Result presentation
- AI explanation generation

Specify the data flow and separation of concerns.
```

**Commentary**: Resulted in the modular architecture with separate logic, AI, and presentation layers. Emphasized keeping AI separate from core decision logic.

### Prompt 2: Scoring Algorithm Development
```
Create a scoring algorithm for evaluating options against constraints like:
- Budget: low/medium/high
- Skill level: beginner/intermediate/expert
- Timeline: urgent/normal/flexible
- Scale: small/medium/large

Each option has attributes with numerical values. How would you calculate and rank options?
```

**Commentary**: Developed the weighted scoring system used in referee.js. Established the concept of additive scoring with configurable weights.

### Prompt 3: API Design
```
Design REST API endpoints for the Referee system. Include:
- Endpoint for getting available options
- Endpoint for submitting constraints and getting recommendations
- Response format with scores, rankings, and explanations

Consider error handling and validation.
```

**Commentary**: Led to the /compare POST endpoint and /compare/test GET endpoint. Defined JSON response structure with constraints, comparison array, and AI explanations.

### Prompt 4: User Interface Concepts
```
Sketch a simple web interface for the Referee tool. What form elements would capture user constraints? How would results be displayed? Include wireframe descriptions and user flow.
```

**Commentary**: Guided the creation of the HTML form with dropdowns for constraints and result display with scores and explanations. Kept it simple for rapid prototyping.

### Prompt 5: Data Structure Planning
```
Define JSON structures for:
- User constraint input
- Option definitions with attributes
- Scoring results with explanations

Provide example data for 3-4 technology options.
```

**Commentary**: Created the options.json format and established the data models used throughout the system. Included realistic examples like AWS vs Firebase comparisons.

## Design Decisions Influenced

- Modular Express routing for maintainability
- JSON-based configuration for flexibility
- Client-side result display with server-side processing
- Clear separation between rule-based scoring and AI explanations

These v2 prompts transformed abstract ideas into implementable specifications, ready for coding.