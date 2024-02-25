class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      result: {}
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
  }
  componentDidMount() {
    console.log(this.state.result);
    const form = document.getElementById('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
    });
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
      result: {
        inputValue: e.target.value
      }
    });
    console.clear();
    console.log(this.state.result);
  }
  handleChangeCheckbox(e) {
    this.setState({
      result: {
        isChecked: e.target.checked
      }
    });
    console.clear();
    console.log(this.state.result);
  }
  handleSubmitForm(e) {
    console.table('Submit!', this.state.result);
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Two-way binding"), /*#__PURE__*/React.createElement("form", {
      id: "form",
      onSubmit: this.handleSubmitForm,
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        rowGap: '10px'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'block'
      }
    }, "Input value: ", this.state.inputValue), /*#__PURE__*/React.createElement("input", {
      onChange: this.handleInputChange,
      id: "input",
      type: "text",
      value: this.state.inputValue
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'block'
      }
    }, "Checked?: ", this.state.isChecked), /*#__PURE__*/React.createElement("input", {
      onChange: this.handleChangeCheckbox,
      type: "checkbox",
      id: "checkbox"
    })), /*#__PURE__*/React.createElement("input", {
      type: "color",
      name: "",
      id: ""
    }), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "",
      id: ""
    }), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "",
      id: ""
    }), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "",
      id: ""
    }), /*#__PURE__*/React.createElement("textarea", {
      name: "",
      id: "",
      cols: "30",
      rows: "10"
    })));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('main'));