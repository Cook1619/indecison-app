class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ["thing 1", "thing 2", "thing three"]
    };
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick() {
    let random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    alert(option);
  }
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header title={ title } subtitle={ subtitle } />
        <Action
          hasOptions={ this.state.options.length > 0 }
          handlePick={ this.handlePick } 
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <div>
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
      </div>
    );
  }
}

class Action extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    const { options, handleDeleteOptions } = this.props;
    return (
      <div>
        <button onClick={handleDeleteOptions}>Remove All</button>
        {options.map((option, index) => {
          return <Option key={index} option={option} />;
        })}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    const { option } = this.props;
    return <div>{option}</div>;
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
