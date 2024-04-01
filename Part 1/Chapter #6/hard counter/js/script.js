class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IncrementButton, {
      handler: this.handleClick
    }), /*#__PURE__*/React.createElement(Info, {
      counter: this.state.counter
    }));
  }
}
const IncrementButton = props => {
  return /*#__PURE__*/React.createElement("button", {
    onClick: props.handler
  }, "CLick me");
};
const Info = props => {
  return /*#__PURE__*/React.createElement("div", null, props.counter);
};
ReactDOM.render( /*#__PURE__*/React.createElement(Content, null), document.getElementById('hard-counter'));