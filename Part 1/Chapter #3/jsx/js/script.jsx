// Simple tag render
ReactDOM.render(
    <h1>Render JSX by h1 tag</h1>,
    document.getElementById('tag')
    )
    
// Declaration "heading" and render variable
const heading = <h1>Render JSX by variable</h1>
ReactDOM.render(
    heading,
    document.getElementById('variable')
)

// Declaration class CodeByClass and render class
class CodeByClass extends React.Component {
    render() {
        return (
            <div>
                <h1>Render JSX by class</h1>
            </div>
        )
    }
}
ReactDOM.render(
    <CodeByClass />,
    document.getElementById('class')
)