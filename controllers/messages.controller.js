const path = require('path')

// function instead of arrow function will appear if an error occurs
function getMessages(req, res) {
  // res.send("<ul><li>Hello Albert Einstein!<li><ul>");
  res.sendFile(path.join(__dirname, '..', 'public', 'images' ,'skymountain.jpg'))
}

function postMessage(req, res) {
  console.log("updating messages");
}

module.exports = {
    getMessages,
    postMessage
}