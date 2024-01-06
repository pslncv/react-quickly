// Include expression into tag and render
class Time extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("h3", null, new Date().toUTCString());
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Time, null), document.getElementById('time'));

// Create class with props
class Links extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "It's a ", /*#__PURE__*/React.createElement("a", {
      href: this.props.firstUrl,
      target: "_blank"
    }, this.props.firstLink), " link"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, "It's a ", /*#__PURE__*/React.createElement("a", {
      href: this.props.secondUrl,
      target: "_blank"
    }, this.props.secondLink), " link"));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Links, {
  firstUrl: "http://google.com",
  secondUrl: "http://ya.ru",
  firstLink: "google",
  secondLink: "yandex"
}), document.getElementById('links'));

// Props and attributes
class Theme extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      "data-react-is-awesome": this.props.reactIsAwesome
    }, "React is awesome");
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Theme, {
  reactIsAwesome: "true"
}), document.getElementById('awesome'));
