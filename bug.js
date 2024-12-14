const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronously fetching data
  someAsyncOperation().then(data => {
    res.send(data);
  }).catch(err => {
    console.error(err);
    // Here's the problem: we don't handle the error properly, 
    // leading to a silent failure. The response is never sent.
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an async operation that might fail
    const success = Math.random() < 0.5;
    setTimeout(() => {
      if (success) {
        resolve({ message: 'Success!' });
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 1000);
  });
}

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));