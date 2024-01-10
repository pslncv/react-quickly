// Custom random naumber component by me
class Random extends React.Component {
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
                <div>Random number from 0 to 10 per 0.5s</div>
                <div>{this.state.number}</div>
            </div>
        )
    }
}
ReactDOM.render(
    <Random />,
    document.getElementById('random')
)