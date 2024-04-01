class List extends React.Component {
    render() {
        return (
            <ul onMouseOver={()=>{console.log('Mouse is over')}} id="acoounts-list">
                <li id="account-1" onClick={event=>{console.log('Account 1', event, event.nativeEvent);}}>Accont</li>
                <li id="account-2">Accont</li>
                <li id="account-3">Accont</li>
                <li id="account-4">Accont</li>
                <li id="account-5">Accont</li>
            </ul>
        )
    }
}
ReactDOM.render(
    <List />,
    document.getElementById('list')
)