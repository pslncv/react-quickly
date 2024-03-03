class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      textarea: '',
      radio: {
        DAO: true,
        DA2: false,
        DAI: false
      },
      checkbox: {
        VUE: false,
        REACT: true,
        ANGULAR: false,
        SVELTE: false
      },
      select: 'node'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleTextarea = this.handleTextarea.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    console.log(this.state);
  }
  handleInput(e) {
    this.setState({
      input: e.target.value
    });
  }
  handleTextarea(e) {
    this.setState({
      textarea: e.target.value
    });
  }
  handleRadio(e) {
    const obj = Object.assign(this.state.radio);
    for (let key in obj) {
      obj[key] = false;
    }
    ;
    obj[e.target.value] = true;
    this.setState({
      radio: obj
    });
    console.log(this.state.radio);
  }
  handleCheckbox(e) {
    const obj = Object.assign(this.state.checkbox);
    obj[e.target.value] = e.target.checked;
    this.setState({
      checkbox: obj
    });
    console.log(this.state.checkbox);
  }
  handleSelect(e) {
    this.setState({
      select: e.target.value
    });
    console.log(this.state.select);
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column",
        rowGap: "20px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("input", {
      id: "input__text",
      type: "text",
      value: this.state.input,
      onChange: this.handleInput
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "input__text"
    }, "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438\u043D\u043F\u0443\u0442\u0430: ", this.state.input || "Пусто!")), /*#__PURE__*/React.createElement("div", {
      style: {
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
      checked: this.state.radio.DAO,
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
      checked: this.state.radio.DA2,
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
      checked: this.state.radio.DAI,
      onChange: this.handleRadio
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "input__radio-3"
    }, "Dragon Age: Inquisition")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        columnGap: "5px"
      }
    }, /*#__PURE__*/React.createElement("input", {
      id: "input__checkbox-1",
      type: "checkbox",
      name: "input__checkbox",
      value: "VUE",
      checked: this.state.checkbox.VUE,
      onChange: this.handleCheckbox
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "input__checkbox-1"
    }, "Vue")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        columnGap: "5px"
      }
    }, /*#__PURE__*/React.createElement("input", {
      id: "input__checkbox-2",
      type: "checkbox",
      name: "input__checkbox",
      value: "REACT",
      checked: this.state.checkbox.REACT,
      onChange: this.handleCheckbox
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "input__checkbox-2"
    }, "React")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        columnGap: "5px"
      }
    }, /*#__PURE__*/React.createElement("input", {
      id: "input__checkbox-3",
      type: "checkbox",
      name: "input__checkbox",
      value: "ANGULAR",
      checked: this.state.checkbox.ANGULAR,
      onChange: this.handleCheckbox
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "input__checkbox-3"
    }, "Angular")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        columnGap: "5px"
      }
    }, /*#__PURE__*/React.createElement("input", {
      id: "input__checkbox-4",
      type: "checkbox",
      name: "input__checkbox",
      value: "SVELTE",
      checked: this.state.checkbox.SVELTE,
      onChange: this.handleCheckbox
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "input__checkbox-4"
    }, "Svelte"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("textarea", {
      id: "input__textarea",
      onChange: this.handleTextarea,
      value: this.state.textarea
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "input__textarea"
    }, "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438\u043D\u043F\u0443\u0442\u0430: ", this.state.textarea || "Пусто!")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("select", {
      value: this.state.select,
      onChange: this.handleSelect
    }, /*#__PURE__*/React.createElement("option", {
      value: "Google"
    }, "Google"), /*#__PURE__*/React.createElement("option", {
      value: "Amazon"
    }, "Amazon"), /*#__PURE__*/React.createElement("option", {
      value: "Facebook"
    }, "Facebook"), /*#__PURE__*/React.createElement("option", {
      value: "Netflix"
    }, "Netflix"))));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('main'));