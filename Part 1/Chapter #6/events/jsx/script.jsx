class Click extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        console.log(this, event)
    }
    render() {
        return (
            <div 
                onMouseOver={() => {console.log('Mouse over on bubble event');}}
                onMouseOverCapture={() => {console.log('Mouse over on capture event');}}
                style={{
                display: 'inline-block',
                border: '2px red solid',
                padding: '40px'
            }}>
                <button onClick={this.handleClick}>Save</button>
            </div>
        )
    }
}
ReactDOM.render(
    <Click />,
    document.getElementById('event')
)