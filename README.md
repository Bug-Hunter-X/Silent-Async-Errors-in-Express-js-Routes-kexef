# Silent Async Errors in Express.js Routes

This example demonstrates a common issue in Node.js applications using Express.js: silent failures in asynchronous route handlers.  When an async operation within a route fails, if the error isn't properly handled, the request hangs, and no response is sent to the client.

## The Problem
The `bug.js` file showcases the problematic code.  An asynchronous operation (`someAsyncOperation`) is used to fetch data within a GET route.  The `.catch` block logs the error, but the request isn't handled; this leads to the client potentially timing out.

## The Solution
The `bugSolution.js` file shows how to fix this problem.  The solution involves using a `try...catch` block around the async operation or using a centralized error handler for Express.js to gracefully handle errors, ensuring a proper response is always sent to the client.