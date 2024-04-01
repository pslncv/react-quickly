class App extends React.Component {
    constructor() {
        super()
        this.state = {
            input: '',
            textarea: '',
            radio: {
                DAO: true,
                DA2: false,
                DAI: false
            },
            checkbox: {
                VUE: false,
                REACT: true,
                ANGULAR: false,
                SVELTE: false,
            },
            select: 'node',
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleTextarea = this.handleTextarea.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    componentDidMount() {
        console.log(this.state);
    }
    handleInput(e) {
        this.setState({input: e.target.value})
    }
    handleTextarea(e) {
        this.setState({textarea: e.target.value})
    }
    handleRadio(e) {
        const obj = Object.assign(this.state.radio);
        for (let key in obj) {
            obj[key] = false;
        };
        obj[e.target.value] = true;
        this.setState({radio: obj});
        console.log(this.state.radio);
    }
    handleCheckbox(e) {
        const obj = Object.assign(this.state.checkbox);
        obj[e.target.value] = e.target.checked
        this.setState({checkbox: obj})
        console.log(this.state.checkbox);
    }
    handleSelect(e) {
        this.setState({select: e.target.value})
        console.log(this.state.select);
    }
    render() {
        return (
            <div style={{maxWidth: "300px", display:"flex", flexDirection: "column", rowGap: "20px"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <input id="input__text" type="text" value={this.state.input} onChange={this.handleInput}/>
                    <label htmlFor="input__text">Значение инпута: {this.state.input || "Пусто!"}</label>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                        <div style={{display: "flex", alignItems: "center", columnGap: "5px"}}>
                            <input id="input__radio-1" name="input__radio" type="radio" value="DAO" checked={this.state.radio.DAO} onChange={this.handleRadio}/>
                            <label htmlFor="input__radio-1">Dragon Age: Origins</label>
                        </div>
                        <div style={{display: "flex", alignItems: "center", columnGap: "5px"}}>
                            <input id="input__radio-2" name="input__radio" type="radio" value="DA2" checked={this.state.radio.DA2} onChange={this.handleRadio}/>
                            <label htmlFor="input__radio-2">Dragon Age 2</label>
                        </div>
                        <div style={{display: "flex", alignItems: "center", columnGap: "5px"}}>
                            <input id="input__radio-3" name="input__radio" type="radio" value="DAI" checked={this.state.radio.DAI} onChange={this.handleRadio}/>
                            <label htmlFor="input__radio-3">Dragon Age: Inquisition</label>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{display: "flex", alignItems: "center", columnGap: "5px"}}>
                        <input id="input__checkbox-1" type="checkbox" name="input__checkbox" value="VUE" checked={this.state.checkbox.VUE} onChange={this.handleCheckbox}/>
                        <label htmlFor="input__checkbox-1">Vue</label>
                    </div>
                    <div style={{display: "flex", alignItems: "center", columnGap: "5px"}}>
                        <input id="input__checkbox-2" type="checkbox" name="input__checkbox" value="REACT" checked={this.state.checkbox.REACT} onChange={this.handleCheckbox}/>
                        <label htmlFor="input__checkbox-2">React</label>
                    </div>
                    <div style={{display: "flex", alignItems: "center", columnGap: "5px"}}>
                        <input id="input__checkbox-3" type="checkbox" name="input__checkbox" value="ANGULAR" checked={this.state.checkbox.ANGULAR} onChange={this.handleCheckbox}/>
                        <label htmlFor="input__checkbox-3">Angular</label>
                    </div>
                    <div style={{display: "flex", alignItems: "center", columnGap: "5px"}}>
                        <input id="input__checkbox-4" type="checkbox" name="input__checkbox" value="SVELTE" checked={this.state.checkbox.SVELTE} onChange={this.handleCheckbox}/>
                        <label htmlFor="input__checkbox-4">Svelte</label>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <textarea id="input__textarea" onChange={this.handleTextarea} value={this.state.textarea}>
                    </textarea>
                    <label htmlFor="input__textarea">Значение инпута: {this.state.textarea || "Пусто!"}</label>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <select value={this.state.select} onChange={this.handleSelect}>
                        <option value="Google">Google</option>
                        <option value="Amazon">Amazon</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Netflix">Netflix</option>
                    </select>
                </div>
            </div>
        )
    }    
}

ReactDOM.render(
    <App />,
    document.getElementById('main')
)