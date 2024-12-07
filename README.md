# Silent Port Binding Failure in Node.js

This repository demonstrates a subtle bug in a Node.js HTTP server where binding to an already-used port fails silently.  The server doesn't throw an error, making debugging challenging.  The solution involves using the 'error' event listener to gracefully handle port binding issues.

## Bug Description
The provided `bug.js` file contains a simple HTTP server. The issue arises when attempting to start this server on a port that's already in use. Instead of a clear error message, the server simply fails to start without any indication of the problem.

## Solution
The `bugSolution.js` file presents a corrected version that uses the `'error'` event listener of the `http.Server` object.  This listener catches the `'EADDRINUSE'` error specifically, providing a user-friendly message indicating that the port is already in use and offering potential solutions.