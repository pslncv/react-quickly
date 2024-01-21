class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return (
            <div>
                <IncrementButton 
                    handler = {this.handleClick}
                />
                <Info 
                    counter = {this.state.counter}
                />
            </div>
        );
    }
}
const IncrementButton = (props) => {
    return <button onClick={props.handler}>CLick me</button>;
}
const Info = (props) => {
    return <div>{props.counter}</div>;
}


ReactDOM.render(
    <Content />,
    document.getElementById('hard-counter')
)