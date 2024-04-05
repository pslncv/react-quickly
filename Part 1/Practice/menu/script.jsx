class Menu extends React.Component {
  render() {
    const menus = [
      'Home',
      'About',
      'Services',
      'Portfolio',
      'Contact us'
    ]
    return (
      <div>
        {menus.map((value, index) => {
          return (
            <div key={index}>
              <Link label={value}></Link>
            </div>
          )
        })}
      </div>
    )
  }
}

class Link extends React.Component {
  render() {
    const url = this.props.label.trim().toLowerCase().replace(' ', '-')
    return (
      <a href={url}>{this.props.label}</a>
    )
  }
}

ReactDOM.render(
  <Menu />,
  document.getElementById('menu')
)