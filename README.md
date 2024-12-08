# Express.js Double Response Bug
This repository demonstrates a common error in Express.js applications where the response is sent twice, leading to unexpected behavior. The second `res.send()` call is ignored because the response has already been sent.  This can be difficult to debug because it doesn't always throw an error.

## Bug
The `doubleResponseBug.js` file contains the erroneous code. The root route handler attempts to send two responses. Only the first one will be sent to the client.

## Solution
The `doubleResponseSolution.js` file provides the corrected code.  Only a single `res.send()` call is made.