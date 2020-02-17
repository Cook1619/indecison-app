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
    handlePick(){
        console.log('picked')
    }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
    handleRemoveAll() {
        console.log(this.props.options)
    }
  render() {
    const { options } = this.props
    return (
        <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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
    handleAddOption(e){
        e.preventDefault()
        const option =  e.target.elements.option.value.trim()
        if (option){
            alert(option)
        }
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
