class App extends React.Component {
    constructor() {
        super()
        this.state = {
            inputValue: '',
            radio: {
                DAO: true,
                DA2: false,
                DAI: false
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
    }
    componentDidMount() {
        console.log(this.state.radio);
    }
    handleInput(e) {
        this.setState({inputValue: e.target.value})
    }
    handleRadio(e) {
        let obj = Object.assign(this.state.radio);
        for (let key in obj) {
            obj[key] = false;
        };
        obj[e.target.value] = true;
        this.setState({radio: obj});
    }
    componentDidUpdate() {
        console.log(this.state.radio);
    }
    render() {
        return (
            <div style={{display: "flex", flexDirection: "column", rowGap: "20px"}}>
                <div style={{maxWidth: "300px", display: "flex", flexDirection: "column"}}>
                    <input id="input__text" type="text" value={this.state.inputValue} onChange={this.handleInput}/>
                    <label htmlFor="input__text">Значение инпута: {this.state.inputValue || "Пусто!"}</label>
                </div>
                <div style={{maxWidth: "300px", display: "flex", flexDirection: "column"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                        <div style={{display: "flex", alignItems: "center", columnGap: "5px"}}>
                            <input id="input__radio-1" name="input__radio" type="radio" value="DAO" checked={this.state.radio['DAO']} onChange={this.handleRadio}/>
                            <label htmlFor="input__radio-1">Dragon Age: Origins</label>
                        </div>
                        <div style={{display: "flex", alignItems: "center", columnGap: "5px"}}>
                            <input id="input__radio-2" name="input__radio" type="radio" value="DA2" checked={this.state.radio['DA2']} onChange={this.handleRadio}/>
                            <label htmlFor="input__radio-2">Dragon Age 2</label>
                        </div>
                        <div style={{display: "flex", alignItems: "center", columnGap: "5px"}}>
                            <input id="input__radio-3" name="input__radio" type="radio" value="DAI" checked={this.state.radio['DAI']} onChange={this.handleRadio}/>
                            <label htmlFor="input__radio-3">Dragon Age: Inquisition</label>
                        </div>
                    </div>
                    <label>Значение инпута:</label>
                </div>
            </div>
        )
    }    
}

ReactDOM.render(
    <App />,
    document.getElementById('main')
)