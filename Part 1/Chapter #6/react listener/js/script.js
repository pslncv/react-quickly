class List extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("ul", {
      onMouseOver: () => {
        console.log('Mouse is over');
      },
      id: "acoounts-list"
    }, /*#__PURE__*/React.createElement("li", {
      id: "account-1",
      onClick: event => {
        console.log('Account 1', event, event.nativeEvent);
      }
    }, "Accont"), /*#__PURE__*/React.createElement("li", {
      id: "account-2"
    }, "Accont"), /*#__PURE__*/React.createElement("li", {
      id: "account-3"
    }, "Accont"), /*#__PURE__*/React.createElement("li", {
      id: "account-4"
    }, "Accont"), /*#__PURE__*/React.createElement("li", {
      id: "account-5"
    }, "Accont"));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(List, null), document.getElementById('list'));