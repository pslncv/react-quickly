// Simple tag render
ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, "Render JSX by h1 tag"), document.getElementById('tag'));

// Declaration "heading" and render variable
const heading = /*#__PURE__*/React.createElement("h1", null, "Render JSX by variable");
ReactDOM.render(heading, document.getElementById('variable'));

// Declaration class CodeByClass and render class
class CodeByClass extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Render JSX by class"));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(CodeByClass, null), document.getElementById('class'));

// Include expression to tag and render
class Time extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("span", null, "Hey, ", this.props.name, ",", /*#__PURE__*/React.createElement("br", null), "now ", new Date().toUTCString());
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Time, {
  name: "Alex"
}), document.getElementById('time'));
