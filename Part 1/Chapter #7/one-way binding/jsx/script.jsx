class App extends React.Component {
    constructor() {
        super()
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }
    componentDidMount() {
        const form = document.getElementById('form');
        console.log(form.input);
        form.addEventListener('submit', (e) => {
            e.preventDefault()
        })
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
        console.clear()
        console.log(form.input);
    }
    handleSubmitForm(e) {
        console.log('Submit!');
    }
    render() {
        return (
            <form id="form" onSubmit={this.handleSubmitForm}>
                <h2>One-way binding</h2>
                <div>Value: {this.state.value}</div>
                <input onChange={this.handleChange} id="input" type="text" style={{display: 'block', margin: '10px 0'}} value={this.state.value}/>
            </form>
        )
    }
    
}

ReactDOM.render(
    <App />,
    document.getElementById('main')
)