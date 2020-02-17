class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      details: false
    };
  }
  handleToggle() {
    this.setState(prevState => {
      return {
        details: !prevState.details
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>
          {this.state.details ? "Hide Details" : "Show Details"}
        </button>
        {this.state.details && <p>THESE ARE THE DETAILS</p>}
      </div>
    );
  }
}
ReactDOM.render(<Visibility />, document.getElementById("app"));

// const onShowDetails = () => {
//     details = !details
//     render()
// }
// let details = false

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onShowDetails}>{details ? 'Hide Details' : 'Show Details'}</button>
//             {details && <p>This are the details!!!!</p>}
//         </div>
//     )
//     ReactDOM.render(template, document.getElementById('app'))
// }
// render()
