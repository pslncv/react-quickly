// Clock class component from book
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      currentTime: new Date().toTimeString()
    };
  }
  launchClock() {
    setInterval(() => {
      this.setState({
        currentTime: new Date().toTimeString()
      });
    }, 1000);
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, this.state.currentTime));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Clock, null), document.getElementById('clock'));

// Custom counter component by me
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.launchCounter();
    this.state = {
      number: Math.floor(Math.random() * 11)
    };
  }
  launchCounter() {
    setInterval(() => {
      this.setState({
        number: Math.floor(Math.random() * 11)
      });
    }, 500);
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", null, "Random number from 0 to 10 per 0.5s"), /*#__PURE__*/React.createElement("div", null, this.state.number));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Counter, null), document.getElementById('counter'));
