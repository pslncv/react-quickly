// Custom random naumber component by me
class Lifecycle extends React.Component {
    constructor() {
        super()
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
        })
    }
    handleRemove() {
        const component = document.getElementById('lifecycle');
        ReactDOM.unmountComponentAtNode(component)
    }
    componentWillMount() {
        console.log('Will mount!')
        console.dir(ReactDOM.findDOMNode(this))
    }
    componentDidMount() {
        console.log('Mount!')
        console.dir(ReactDOM.findDOMNode(this))
    }
    componentDidUpdate() {
        console.log('Update!');
    }
    componentWillUnmount() {
        console.log('Unmount!');
    }
    render() {
        return (
            <div>
                <div onClick={this.change}>{this.state.label}{this.state.counter}{this.state.counterText}</div>
                <div onClick={this.handleRemove}>Unmoumt Component</div>
            </div>
        )
    }
}
ReactDOM.render(
    <Lifecycle />,
    document.getElementById('lifecycle')
)