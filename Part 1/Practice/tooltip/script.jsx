class Tooltip extends React.Component {
    constructor() {
        super()
        this.state = {opacity: false}
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        const tooltipNode = ReactDOM.findDOMNode(this)
        this.setState({
            opacity: !this.state.opacity,
            top: tooltipNode.offsetTop,
            left: tooltipNode.offsetLeft
        })
    }
    render() {
        const tooltopStyle = {
            offsetPosition: 0,
            position: 'absolute',
            padding: 10,
            color: 'white',
            backgroundColor: 'black',
            borderRadius: 5,
            zIndex: this.state.opacity ? 1000 : -1000,
            opacity: +this.state.opacity,
            visibility: this.state.opacity ? 'visible' : 'hidden',
            transition: 'all .2s ease-in-out',
            top: 30,
            left: 20
        }
        return (
            <span>

                <div style={tooltopStyle}>
                    {this.props.text}
                </div>

                <span style={{
                    paddingBottom: 1,
                    borderBottom: '1px black dashed',
                    cursor: 'help'
                }}
                onMouseEnter={this.toggle}
                onMouseLeave={this.toggle}>
                    {this.props.children}
                </span>
            </span>
        )
    }
}

ReactDOM.render(
    <div>
        <Tooltip text="The book you're reading now">React Quickly</Tooltip> was published on 2017. It's awesome!
        <br />        
        <br />        
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate amet harum quas velit libero et nesciunt dolor iusto facere quos. Dolore illum rem repellendus pariatur quaerat itaque officia vitae fugit molestias mollitia minus tempora harum, expedita modi cum dolor. Quasi eum <span style={{position: "relative"}}><Tooltip text="dolore">dolore</Tooltip></span>, illum ex aliquam eos quisquam, iure quis provident ea, in vitae. Aliquam numquam reiciendis illum nihil consequuntur quod quasi? Molestiae officiis odio reprehenderit illo nobis explicabo veniam architecto.
        </div>
    </div>,
    document.getElementById('main')
)