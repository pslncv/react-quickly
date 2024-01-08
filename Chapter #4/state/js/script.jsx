// Clock class component from book
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.launchClock();
        this.state = {
            currentTime: new Date().toTimeString()
        }
    }
    launchClock () {
        setInterval(() => {
          this.setState({
            currentTime: new Date().toTimeString()
          })
        }, 1000)
    }
    render () {
        return (
            <div>
                <span>{this.state.currentTime}</span>
            </div>
        )
    }
}
ReactDOM.render(
    <Clock />,
    document.getElementById('clock')
)

// Custom counter component by me
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.launchCounter();
        this.state = {
            number: Math.floor(Math.random() * 11)
        };
    }
    launchCounter() {
        setInterval(() => {
          this.setState({
            number: Math.floor(Math.random() * 11)
          })
        }, 500)
    }
    render() {
        return(
            <div>
                <br/>
                <div>Random number from 0 to 10 per 0.5s</div>
                <div>{this.state.number}</div>
            </div>
        )
    }
}
ReactDOM.render(
    <Counter />,
    document.getElementById('counter')
)