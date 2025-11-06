const express = require("express");
const path = require('path')

const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')

const app = express();

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/site',express.static(path.join(__dirname, 'public'))) //static is relative to where i started my node application
app.use(express.json());

app.use('/friends',friendsRouter) //sometimes called mounting the friends router on the app object
app.use('/messages',messagesRouter)

app.listen(3000, () => {
  console.log("server running on port 3000");
});
