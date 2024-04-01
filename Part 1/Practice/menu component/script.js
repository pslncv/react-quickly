class Menu extends React.Component {
  render() {
    const menus = [
      'Home',
      'About',
      'Services',
      'Portfolio',
      'Contuct us'
    ];

    return (
      React.createElement(
        'div',
        null,
        menus.map((value, index) => {
          return (
            React.createElement(
              'div',
              {key: index},
              React.createElement(
                Link,
                {label: value}
              )
            )
          )
        })
      )
    )
  }
}

class Link extends React.Component {
  render() {
    const url = '/' + this.props.label.trim().toLowerCase().replace(' ', '-')
    return (
      React.createElement(
        'a',
        {href: url},
        this.props.label
      )
    )
  }
}

ReactDOM.render(
  React.createElement(
    Menu,
    null
  ),
  document.getElementById('menu')
)