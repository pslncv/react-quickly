class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      buttonLabel: "Start"
    }), /*#__PURE__*/React.createElement(Button, null), /*#__PURE__*/React.createElement(Button, {
      title: 8
    }), /*#__PURE__*/React.createElement(Button, null), /*#__PURE__*/React.createElement(Button, {
      email: "not-a-valid-email"
    }), /*#__PURE__*/React.createElement(Button, {
      email: "hi@azat.co"
    }));
  }
}
class Button extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("button", null, this.props.buttonLabel);
  }
}
Button.defaultProps = {
  buttonLabel: 'Submit'
};
Button.propTypes = {
  title: PropTypes.string,
  handler: PropTypes.func.isRequired,
  email(props, propName, componenntName) {
    let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!emailRegularExpression.test(props[propName])) {
      return new Error('Email validation failed!');
    }
  }
};
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('main'));