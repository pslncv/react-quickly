class App extends React.Component {
    constructor() {
        super()
        this.state = {
            inputValue: '',
            result: {}
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    }
    componentDidMount() {
        console.log(this.state.result);
        const form = document.getElementById('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault()
        })
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value,
            result: {inputValue: e.target.value}
        })
        console.clear()
        console.log(this.state.result);
    }
    handleChangeCheckbox(e) {
        this.setState({
            result: {isChecked: e.target.checked}
        })
        console.clear()
        console.log(this.state.result);
    }
    handleSubmitForm(e) {
        console.table('Submit!', this.state.result);
    }
    render() {
        return (
            <div>            
                <h2>Two-way binding</h2>
                <form id="form" onSubmit={this.handleSubmitForm} style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', rowGap: '10px'}}>
                    <div>
                        <label style={{display: 'block'}}>Input value: {this.state.inputValue}</label>
                        <input onChange={this.handleInputChange} id="input" type="text" value={this.state.inputValue}/>
                    </div>
                <div>
                    <label style={{display: 'block'}}>Checked?: {this.state.isChecked}</label>
                    <input onChange={this.handleChangeCheckbox} type="checkbox" id="checkbox"/>
                </div>
                
                <input type="color" name="" id="" />
                <input type="radio" name="" id="" />
                <input type="radio" name="" id="" />
                <input type="radio" name="" id="" />
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </form>
            </div>
        )
    }
    
}

ReactDOM.render(
    <App />,
    document.getElementById('main')
)