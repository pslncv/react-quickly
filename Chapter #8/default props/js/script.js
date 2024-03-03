class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, null), /*#__PURE__*/React.createElement(Button, {
      buttonLabel: "is"
    }), /*#__PURE__*/React.createElement(Button, {
      buttonLabel: "good"
    }));
  }
}
class Datepicker extends React.Component {
  constructor() {
    super();
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null);
  }
}
class Button extends React.Component {
  constructor() {
    super();
  }
  render() {
    return /*#__PURE__*/React.createElement("button", {
      style: this.props.styles
    }, this.props.buttonLabel);
  }
}
Button.defaultProps = {
  buttonLabel: 'React',
  styles: {
    width: '50px',
    height: '50px',
    borderRadius: '5px',
    marginRight: '10px',
    border: '2px red solid'
  }
};
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('main'));