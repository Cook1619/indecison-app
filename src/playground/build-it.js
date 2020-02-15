
const onShowDetails = () => {
    details = !details
    render()
}
let details = false

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onShowDetails}>{details ? 'Hide Details' : 'Show Details'}</button>
            {details && <p>This are the details!!!!</p>}
        </div>
    )
    ReactDOM.render(template, document.getElementById('app'))
}
render()
