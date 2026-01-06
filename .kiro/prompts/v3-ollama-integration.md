# Prompt Evolution: v3 - Ollama Integration

## Overview

Version 3 prompts focused on integrating Ollama with Mistral for AI-generated explanations. These prompts refined the interaction between the rule-based system and the LLM to produce consistent, helpful explanations.

## Key Prompts Used

### Prompt 1: Basic Ollama Setup
```
How do I integrate Ollama with a Node.js application for generating text explanations? Provide code examples for:
- Making API calls to local Ollama
- Handling responses and errors
- Basic prompt structure for explanation generation
```

**Commentary**: Established the foundation for ollamaReferee.js. Learned about Ollama's REST API and proper error handling for local LLM calls.

### Prompt 2: Explanation Prompt Engineering
```
Create a prompt template for explaining technology choice recommendations. The prompt should take:
- User constraints (budget, skill, timeline, scale)
- Option scores and rankings
- Key attributes of each option

Generate natural language explanations that highlight trade-offs.
```

**Commentary**: Developed the core prompt structure used in the AI module. Emphasized clarity and objectivity in explanations.

### Prompt 3: Response Formatting
```
Design a prompt that ensures Ollama returns explanations in a consistent JSON format. Include fields for:
- Summary of recommendation
- Detailed trade-off analysis
- Confidence level

Provide examples of good and bad responses.
```

**Commentary**: Added JSON formatting instructions to prompts, ensuring parseable AI responses. This was crucial for reliable integration.

### Prompt 4: Context Optimization
```
How can I optimize prompts for Ollama/Mistral to generate better explanations while keeping response time reasonable? Consider:
- Prompt length and specificity
- Context window management
- Temperature and other parameters
```

**Commentary**: Learned to balance detail with performance. Reduced prompt complexity while maintaining explanation quality.

### Prompt 5: Error Handling and Fallbacks
```
Design prompts and logic for handling cases where Ollama fails or returns unusable responses. Include:
- Fallback explanations based on rule scores
- Retry logic with simplified prompts
- User-friendly error messages
```

**Commentary**: Implemented robust error handling, ensuring the system degrades gracefully when AI is unavailable.

## Example Prompts in Use

### Basic Explanation Prompt
```
Given these user constraints: {constraints}
And these option rankings: {rankings}
Generate a brief explanation of why {top_option} is recommended, highlighting key trade-offs.
```

### Advanced JSON Prompt
```
Analyze these technology options based on user constraints and provide a JSON response with:
- "recommendation": brief summary
- "tradeoffs": array of key trade-offs
- "confidence": numerical score

Constraints: {constraints}
Options: {options_data}
```

## Integration Improvements

- Consistent JSON responses from AI
- Fallback to rule-based explanations only
- Optimized prompt length for faster responses
- Better error recovery and user messaging

These v3 prompts completed the AI integration, making "The Referee" a fully functional system with intelligent explanations.