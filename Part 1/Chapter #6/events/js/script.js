class Click extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    console.log(this, event);
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      onMouseOver: () => {
        console.log('Mouse over on bubble event');
      },
      onMouseOverCapture: () => {
        console.log('Mouse over on capture event');
      },
      style: {
        display: 'inline-block',
        border: '2px red solid',
        padding: '40px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: this.handleClick
    }, "Save"));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Click, null), document.getElementById('event'));