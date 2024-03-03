class App extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Button/>
                <Button buttonLabel='is'/>
                <Button buttonLabel='good'/>
            </div>
        )
    }
}

class Datepicker extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div></div>
        )
    }
}

class Button extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <button style={this.props.styles}>{this.props.buttonLabel}</button>
        )
    }
}

Button.defaultProps = {
    buttonLabel: 'React',
    styles: {
        width: '50px',
        height: '50px',
        borderRadius: '5px',
        marginRight: '10px',
        border: '2px red solid'
    }
}

    
ReactDOM.render(
    <App />,
    document.getElementById('main')
)