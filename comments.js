// Create web server 
// 1. Create web server
// 2. Create router
// 3. Create handler
// 4. Register handler with router
// 5. Start server
// 6. Test
// 7. Create comments
// 8. Create endpoint
// 9. Test

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create router
const router = express.Router();

// 3. Create handler
const handler = (req, res) => {
  res.send('Hello World!');
};

// 4. Register handler with router
router.get('/', handler);

// 5. Start server
app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// 6. Test
// http://localhost:3000/

// 7. Create comments
const comments = [
  { username: 'Tam', comment: 'Hello World!' },
  { username: 'Tim', comment: 'Hello World!' },
  { username: 'Tom', comment: 'Hello World!' },
];

// 8. Create endpoint
router.get('/comments', (req, res) => {
  res.json(comments);
});

// 9. Test
// http://localhost:3000/comments