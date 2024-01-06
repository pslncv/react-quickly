// Simple condition
class Login extends React.Component {
  render() {
    const isLogin = false;
    if (isLogin) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "You are login!"), /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Logout"));
    } else {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "You aren't login"), /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Login?"));
    }
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Login, null), document.getElementById('if-else'));

// Simple tarnary + comment
class Age extends React.Component {
  isAdult() {
    return this.props.age >= 18;
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, this.isAdult() ? /*#__PURE__*/React.createElement("div", null, "You are adult because your'e ", this.props.age, "!") : /*#__PURE__*/React.createElement("div", null, "You are baby because ", " ", this.props.age, "!"));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Age, {
  age: "15"
}), document.getElementById('ternary'));
