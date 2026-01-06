# Debugging Log: The Referee Project

This log chronicles the debugging process for "The Referee" project, highlighting issues encountered and how Kiro-assisted reasoning helped resolve them. Each entry includes the problem, attempted solutions, and lessons learned.

## Issue 1: Express Routing Errors (November 5, 2025)
**Problem**: GET /compare/test returned "Cannot GET /compare/test" despite defining the route.  
**Symptoms**: Server started successfully, but route not found.  
**Root Cause**: Routes were defined inline in index.js instead of using modular routers. The app.use() for mounting the compare router was missing.  
**Kiro Assistance**: Prompted AI to review Express routing patterns; suggested checking middleware order and router exports.  
**Solution**: Refactored to use `app.use("/compare", compareRoute)` with proper require. Added body parser middleware.  
**Lessons Learned**: Always verify middleware mounting; use modular routes for scalability.

## Issue 2: CORS Issues with Frontend Integration (November 12, 2025)
**Problem**: Browser requests from the client failed with CORS errors.  
**Symptoms**: Console showed "Access-Control-Allow-Origin" header missing.  
**Root Cause**: Express server lacked CORS middleware for cross-origin requests.  
**Kiro Assistance**: AI suggested installing and configuring the `cors` package; explained preflight request handling.  
**Solution**: Added `app.use(cors())` in index.js.  
**Lessons Learned**: Remember CORS for web applications; test API endpoints from browser early.

## Issue 3: Ollama Network Connection Problems (November 20, 2025)
**Problem**: AI explanation requests failed with "connection refused" errors.  
**Symptoms**: Ollama service appeared running, but API calls timed out.  
**Root Cause**: Incorrect API endpoint URL; Ollama was running on a different port than expected.  
**Kiro Assistance**: AI helped diagnose network issues by suggesting curl tests and checking Ollama logs. Prompted investigation of localhost vs. 127.0.0.1.  
**Solution**: Updated endpoint to correct port (11434); ensured Ollama was started before server.  
**Lessons Learned**: Verify service configurations; use local testing tools for API integrations.

## Issue 4: JSON Parsing Errors in POST Requests (November 25, 2025)
**Problem**: POST /compare returned 500 errors when sending JSON data.  
**Symptoms**: req.body was undefined in route handlers.  
**Root Cause**: Missing `app.use(express.json())` middleware for parsing JSON request bodies.  
**Kiro Assistance**: AI reminded of Express body parsing requirements; suggested checking middleware order.  
**Solution**: Added express.json() middleware before route definitions.  
**Lessons Learned**: Body parsing is essential for API endpoints; test with tools like curl or Postman.

## Issue 5: AI Response Formatting Inconsistencies (December 1, 2025)
**Problem**: Ollama responses varied in structure, causing parsing errors.  
**Symptoms**: JSON.parse() failures on AI-generated explanations.  
**Root Cause**: Prompts did not specify consistent output format.  
**Kiro Assistance**: AI helped refine prompts to include strict JSON formatting instructions.  
**Solution**: Updated prompts to request JSON responses with specific keys.  
**Lessons Learned**: Prompt engineering is crucial for reliable AI integration; validate AI outputs.

These debugging sessions were significantly expedited by Kiro's ability to provide contextual suggestions and step-by-step reasoning, reducing resolution time from hours to minutes in most cases.

Personal note:
While integrating the frontend and backend, I initially faced repeated
CORS errors when calling the API from localhost:3000. With Kiro’s help,
I identified that the Express server needed explicit origin configuration,
which helped me understand real-world cross-origin restrictions better.
