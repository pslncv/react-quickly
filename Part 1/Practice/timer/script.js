const Timer = props => {
  if (props.timeLeft == 0) {
    document.getElementById('audio').play();
  }
  if (props.timeLeft == null || props.timeLeft == 0) {
    return /*#__PURE__*/React.createElement("div", null);
  }
  return /*#__PURE__*/React.createElement("h3", null, "Time left: ", props.timeLeft);
};
const Button = props => {
  const startTimer = () => {
    return props.startTimer(props.time);
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: startTimer,
    className: "timer-button"
  }, props.time, " seconds");
};
class TimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: null,
      timer: null
    };
    this.startTimer = this.startTimer.bind(this);
  }
  startTimer(timeLeft) {
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
      var timeLeft = this.state.timeLeft - 1;
      if (timeLeft === 0) clearInterval(timer);
      this.setState({
        timeLeft: timeLeft
      });
    }, 1000);
    return this.setState({
      timeLeft: timeLeft,
      timer: timer
    });
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "timer__header"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "timer__title"
    }, "Timer"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      time: "5",
      startTimer: this.startTimer
    }), /*#__PURE__*/React.createElement(Button, {
      time: "10",
      startTimer: this.startTimer
    }), /*#__PURE__*/React.createElement(Button, {
      time: "15",
      startTimer: this.startTimer
    })), /*#__PURE__*/React.createElement(Timer, {
      timeLeft: this.state.timeLeft
    }), /*#__PURE__*/React.createElement("audio", {
      id: "audio",
      src: "flute_c_long_01.wav",
      preload: "auto"
    }));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(TimerWrapper, null), document.getElementById('main'));
