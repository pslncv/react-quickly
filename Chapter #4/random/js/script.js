// Custom random naumber component by me
class Random extends React.Component {
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
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "Random number from 0 to 10 per 0.5s"), /*#__PURE__*/React.createElement("div", null, this.state.number));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Random, null), document.getElementById('random'));
