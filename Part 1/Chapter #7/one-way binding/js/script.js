class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }
  componentDidMount() {
    const form = document.getElementById('form');
    console.log(form.input);
    form.addEventListener('submit', e => {
      e.preventDefault();
    });
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
    console.clear();
    console.log(form.input);
  }
  handleSubmitForm(e) {
    console.log('Submit!');
  }
  render() {
    return /*#__PURE__*/React.createElement("form", {
      id: "form",
      onSubmit: this.handleSubmitForm
    }, /*#__PURE__*/React.createElement("div", null, "Value: ", this.state.value), /*#__PURE__*/React.createElement("input", {
      onChange: this.handleChange,
      id: "input",
      type: "text",
      style: {
        display: 'block',
        margin: '10px 0'
      },
      value: this.state.value
    }));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('main'));