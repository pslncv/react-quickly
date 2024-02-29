class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      radio: {
        DAO: true,
        DA2: false,
        DAI: false
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }
  componentDidMount() {
    console.log(this.state.radio);
  }
  handleInput(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  handleRadio(e) {
    let obj = Object.assign(this.state.radio);
    for (let key in obj) {
      obj[key] = false;
    }
    ;
    obj[e.target.value] = true;
    this.setState({
      radio: obj
    });
  }
  componentDidUpdate() {
    console.log(this.state.radio);
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        rowGap: "20px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("input", {
      id: "input__text",
      type: "text",
      value: this.state.inputValue,
      onChange: this.handleInput
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "input__text"
    }, "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438\u043D\u043F\u0443\u0442\u0430: ", this.state.inputValue || "Пусто!")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        columnGap: "5px"
      }
    }, /*#__PURE__*/React.createElement("input", {
      id: "input__radio-1",
      name: "input__radio",
      type: "radio",
      value: "DAO",
      checked: this.state.radio['DAO'],
      onChange: this.handleRadio
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "input__radio-1"
    }, "Dragon Age: Origins")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        columnGap: "5px"
      }
    }, /*#__PURE__*/React.createElement("input", {
      id: "input__radio-2",
      name: "input__radio",
      type: "radio",
      value: "DA2",
      checked: this.state.radio['DA2'],
      onChange: this.handleRadio
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "input__radio-2"
    }, "Dragon Age 2")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        columnGap: "5px"
      }
    }, /*#__PURE__*/React.createElement("input", {
      id: "input__radio-3",
      name: "input__radio",
      type: "radio",
      value: "DAI",
      checked: this.state.radio['DAI'],
      onChange: this.handleRadio
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "input__radio-3"
    }, "Dragon Age: Inquisition"))), /*#__PURE__*/React.createElement("label", null, "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438\u043D\u043F\u0443\u0442\u0430:")));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('main'));