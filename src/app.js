class IndecisionApp extends React.Component {
  render() {
      const title = 'Indecision'
      const subtitle = 'Put your life in the hands of a computer'
      let options = ['thing 1', 'thing 2', 'thing 3']
    return (
      <div>
        <Header title={ title } subtitle={ subtitle }/>
        <Action />
        <Options options={ options }/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
      const { title, subtitle } =  this.props
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
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    const { options } = this.props
    return (
        <div>
            Option component here
            {options.map((option, index) => {
                return <Option key={index} option={option}/>
            })}
        </div>
    )
  }
}

class Option extends React.Component {
    render(){
        const { option } = this.props
        return (
            <div>
                {option}
            </div>
        )
    }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Add options here" />
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
