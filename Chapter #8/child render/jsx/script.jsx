class App extends React.Component {
    render() {
        return (
            <div>
                <Content
                    children='one'
                />
                <Content
                    children='two'
                />
                <Content
                    children='three'
                />
                <Content
                    children='four'
                />
            </div>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}
    
ReactDOM.render(
    <App />,
    document.getElementById('main')
)