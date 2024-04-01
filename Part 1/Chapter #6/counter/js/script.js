class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      counter: '',
      isUpdated: ''
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleDecrement() {
    this.setState({
      number: --this.state.number,
      counter: ++this.state.counter,
      isUpdated: `Updated ${this.state.counter} times!`
    });
  }
  handleIncrement() {
    this.setState({
      number: ++this.state.number,
      counter: ++this.state.counter,
      isUpdated: `Updated ${this.state.counter} times!`
    });
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: this.handleDecrement
    }, "--"), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '0 10px'
      }
    }, this.state.number), /*#__PURE__*/React.createElement("button", {
      onClick: this.handleIncrement
    }, "++")), /*#__PURE__*/React.createElement("div", null, this.state.isUpdated));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Counter, null), document.getElementById('counter'));