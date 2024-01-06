// Include expression into tag and render
class Time extends React.Component {
    render() {
        return (
            <h3>{new Date().toUTCString()}</h3>
        )
    }
}
ReactDOM.render(
    <Time/>,
    document.getElementById('time')
)

// Create class with props
class Links extends React.Component {
    render() {
        return (
            <div>
                <span>It's a <a href={this.props.firstUrl} target="_blank">{this.props.firstLink}</a> link</span>
                <br />
                <span>It's a <a href={this.props.secondUrl} target="_blank">{this.props.secondLink}</a> link</span>
            </div>
        )
    }
}
ReactDOM.render (
    (<Links 
        firstUrl="http://google.com"
        secondUrl="http://ya.ru"
        firstLink="google"
        secondLink="yandex"
    />),
    document.getElementById('links')
)

// Props and attributes
class Theme extends React.Component {
    render() {
        return (
            <div data-react-is-awesome={this.props.reactIsAwesome}>React is awesome? {this.props.reactIsAwesome}</div>
        )
    }
}
ReactDOM.render(
    <Theme
        reactIsAwesome="YES!"
    />,
    document.getElementById('awesome')
)

// All props
class Human extends React.Component {
    render () {
        return (
            <div {...this.props}>
                <div>Hello, my name is {this.props.name}</div>
                <div>I'm {this.props.age}</div>
                <div>And I from {this.props.city}</div>
            </div>           
        )
    }
}
ReactDOM.render(
    <Human
        id="testID"
        className="testCLASS"
        name="Alex"
        age="22"
        city="LA"
    />,
    document.getElementById('human')
)