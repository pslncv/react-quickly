class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            number: 0,
            counter: '',
            isUpdated: '',
        }
        this.handleDecrement = this.handleDecrement.bind(this)
        this.handleIncrement = this.handleIncrement.bind(this)
    }
    handleDecrement() {
        this.setState({
            number: --this.state.number,
            counter: ++this.state.counter,
            isUpdated: `Updated ${this.state.counter} times!`,
        })
    }
    handleIncrement() {
        this.setState({
            number: ++this.state.number,
            counter: ++this.state.counter,
            isUpdated: `Updated ${this.state.counter} times!`,
        })
    }
    render() { 
        return (
            <div>
                <div style={{display: 'flex'}}>
                    <button onClick={this.handleDecrement}>--</button>
                    <div style={{margin: '0 10px'}}>{this.state.number}</div>
                    <button onClick={this.handleIncrement}>++</button>
                </div>
                <div>{this.state.isUpdated}</div>
            </div>
        );
    }
}
ReactDOM.render(
    <Counter />,
    document.getElementById('counter')
)