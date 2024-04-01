// Simple condition
class Login extends React.Component {
    render () {
        const isLogin = false
        if(isLogin) {
            return (
                <div>
                    <div>You are login!</div>
                    <a href="#">Logout</a>
                </div>
            )
        } else {
            return (
                <div>
                    <div>You aren't login</div>
                    <a href="#">Login?</a>
                </div>
            )
        }
    }
}
ReactDOM.render(
    <Login />,
    document.getElementById('if-else')
)

// Simple tarnary + comment
class Age extends React.Component {
    isAdult() {
        return this.props.age >= 18
    }
    render () {
        return (
            <div>
                {this.isAdult()
                    ? <div>You are adult because your'e {this.props.age}!</div>
                    : <div>You are baby because {/*your'e*/} {this.props.age}!</div>
                }               
            </div>
        )
    }
}
ReactDOM.render(
    <Age 
        age='15'
    />,
    document.getElementById('ternary')
)