const React = require('react')

class App extends React.Component {
  render() {
    return (
      React.createElement("div", {className: "App"},

          "To get started, edit111111 ", React.createElement("code", null, "src/App.js"), " and save to reload."
      )
    );
  }
}

module.exports = App
