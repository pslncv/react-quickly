// Simple method
class Cash extends React.Component {
  getCash() {
    return this.props.days * this.props.salary;
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, "If i have ", this.props.days, " days for $", this.props.salary, " per each, then i'll have $", this.getCash());
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Cash, {
  days: "5",
  salary: "30"
}), document.getElementById('cash'));
