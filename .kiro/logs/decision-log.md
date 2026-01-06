# Decision Log: The Referee Project

This log documents key architectural and implementation decisions made during the development of "The Referee," a constraint-based decision support tool. Each decision is justified based on project requirements, technical constraints, and long-term maintainability.

## Decision 1: Rule-Based Logic Before AI Integration
**Date**: October 15, 2025  
**Decision**: Implement core decision logic using traditional rule-based algorithms before integrating AI components.  
**Rationale**: Ensures the system has a solid, deterministic foundation. AI is used only for generating human-readable explanations of the rule-based results, maintaining explainability and reliability. This approach avoids over-reliance on AI for critical logic, which could introduce unpredictability.  
**Impact**: Improved system robustness; easier debugging and testing of core functionality.

## Decision 2: Explainable Trade-Offs in Recommendations
**Date**: October 20, 2025  
**Decision**: Structure the output to include not just recommendations, but detailed explanations of trade-offs (e.g., "Higher cost for better scalability").  
**Rationale**: Users need transparency in decision-making processes. By quantifying trade-offs, the tool becomes more trustworthy and educational. This aligns with the project's goal of being a "referee" that guides rather than dictates choices.  
**Impact**: Enhanced user experience; positions the tool as an expert advisor rather than a black-box recommender.

## Decision 3: Local LLM Choice (Ollama with Mistral)
**Date**: November 1, 2025  
**Decision**: Use Ollama running Mistral-7B as the local LLM for generating explanations, instead of cloud-based APIs.  
**Rationale**: Privacy concerns with user data; cost savings; offline capability for development and deployment. Mistral was chosen for its balance of performance and resource requirements on local hardware. This decision also supports the project's open-source ethos.  
**Impact**: Reduced dependencies on external services; improved data privacy; enabled faster iteration during development.

## Decision 4: Modular Architecture with Express Routing
**Date**: November 10, 2025  
**Decision**: Organize the backend using Express.js with modular routes, separating concerns between data processing, AI integration, and API endpoints.  
**Rationale**: Improves maintainability and scalability. Allows for independent testing of components and easier future enhancements.  
**Impact**: Cleaner codebase; facilitated parallel development of frontend and backend.

## Decision 5: JSON-Based Configuration for Options
**Date**: November 15, 2025  
**Decision**: Store decision options and their attributes in a JSON file rather than a database.  
**Rationale**: Simplicity for a prototype; easy to modify without database migrations. Suitable for a tool with a fixed set of options.  
**Impact**: Faster development; reduced complexity; can be upgraded to a database later if needed.

These decisions collectively shaped "The Referee" into a reliable, user-centric tool that leverages AI thoughtfully while maintaining control and transparency.

Personal decision:
I initially planned to let the AI recommend a single best option.
After discussing with Kiro, I realized this reduces user trust.
This led me to redesign the system so AI explains trade-offs instead
of making decisions.
