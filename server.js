const express = require("express");

const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')

const app = express();

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());

app.use('/friends',friendsRouter) //sometimes called mounting the friends router on the app object
app.use('/messages',messagesRouter)

app.listen(3000, () => {
  console.log("server running on port 3000");
});
