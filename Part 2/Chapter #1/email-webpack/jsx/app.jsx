require('../css/main.css')

const React = require('react')
const ReactDOM = require ('react-dom')
const Content = require('./content.jsx')

class App extends React.Component {
    render() {
        return (
            <h1>Hello</h1>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('main')
)