// Custom random naumber component by me
class Lifecycle extends React.Component {
  constructor() {
    super();
    this.state = {
      label: "Component isn't been updated yet ",
      counter: '',
      counterText: ''
    };
    this.change = this.change.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  change() {
    this.setState({
      label: "Component updated ",
      counter: +this.state.counter + 1,
      counterText: ' times'
    });
  }
  handleRemove() {
    const component = document.getElementById('lifecycle');
    ReactDOM.unmountComponentAtNode(component);
  }
  componentWillMount() {
    console.log('Will mount!');
    console.dir(ReactDOM.findDOMNode(this));
  }
  componentDidMount() {
    console.log('Mount!');
    console.dir(ReactDOM.findDOMNode(this));
  }
  componentDidUpdate() {
    console.log('Update!');
  }
  componentWillUnmount() {
    console.log('Unmount!');
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      onClick: this.change
    }, this.state.label, this.state.counter, this.state.counterText), /*#__PURE__*/React.createElement("div", {
      onClick: this.handleRemove
    }, "Unmoumt Component"));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Lifecycle, null), document.getElementById('lifecycle'));