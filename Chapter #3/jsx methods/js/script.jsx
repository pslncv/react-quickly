// Simple method
class Cash extends React.Component {
    getCash() {
        return (
            this.props.days * this.props.salary
        )
    }
    render () {
        return (
            <div>
                If i have {this.props.days} days
                for ${this.props.salary} per each,
                then i'll have ${this.getCash()}
            </div>
        )
    }
}
ReactDOM.render(
    <Cash 
        days='5'
        salary='30'
    />,
    document.getElementById('cash')
)