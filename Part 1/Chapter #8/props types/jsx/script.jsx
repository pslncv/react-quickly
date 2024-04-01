class App extends React.Component {
    render() {
        return (
            <div>
                <Button buttonLabel="Start"/>
                <Button />
                <Button title={8}/>
                <Button />
                <Button email="not-a-valid-email"/>
                <Button email="hi@azat.co"/>
            </div>
        )
    }
}

class Button extends React.Component {
    render() {
        return (
            <button>{this.props.buttonLabel}</button>
        )
    }
}

Button.defaultProps = {buttonLabel: 'Submit'}

Button.propTypes = {
    title: PropTypes.string, 
    handler: PropTypes.func.isRequired,
    email(props, propName, componenntName) {
        let emailRegularExpression =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
        if (!emailRegularExpression.test(props[propName])) {
        return new Error('Email validation failed!')
        }
    }
}

    
ReactDOM.render(
    <App />,
    document.getElementById('main')
)