class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Content, {
      children: "one"
    }), /*#__PURE__*/React.createElement(Content, {
      children: "two"
    }), /*#__PURE__*/React.createElement(Content, {
      children: "three"
    }), /*#__PURE__*/React.createElement(Content, {
      children: "four"
    }));
  }
}
class Content extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, this.props.children);
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('main'));