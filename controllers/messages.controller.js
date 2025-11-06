// function instead of arrow function will appear if an error occurs
function getMessages(req, res) {
  res.send("<ul><li>Hello Albert Einstein!<li><ul>");
}

function postMessage(req, res) {
  console.log("updating messages");
}

module.exports = {
    getMessages,
    postMessage
}