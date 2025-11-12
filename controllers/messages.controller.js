const path = require("path");

// function instead of arrow function will appear if an error occurs
function getMessages(req, res) {
  res.render("messages", {
    title: "messages to my friends",
    friend: "bill gates",
  });
}

function postMessage(req, res) {
  console.log("updating messages");
}

module.exports = {
  getMessages,
  postMessage,
};
