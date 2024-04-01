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
    }, "React is awesome? ", this.props.reactIsAwesome);
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Theme, {
  reactIsAwesome: "YES!"
}), document.getElementById('awesome'));

// All props
class Human extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", this.props, /*#__PURE__*/React.createElement("div", null, "Hello, my name is ", this.props.name), /*#__PURE__*/React.createElement("div", null, "I'm ", this.props.age), /*#__PURE__*/React.createElement("div", null, "And I from ", this.props.city));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Human, {
  id: "testID",
  className: "testCLASS",
  name: "Alex",
  age: "22",
  city: "LA"
}), document.getElementById('human'));
