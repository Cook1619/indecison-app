import React from 'react';
import AddOption from './AddOption';
import { Options } from './Options';
import { Action } from './Action'
import { Header } from './Header'

export default class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption= this.handleDeleteOption.bind(this);
      this.state = {
        options: []
      };
    }
    componentDidMount(){
      try {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({options}))
      }
      } catch (e) {
        //Do nothing
      }
    }
    componentDidUpdate(prevProps, prevState){
      if (prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json)
      }
    }
  
    handleDeleteOptions() {
      this.setState(() => ({ options: [] }));
    }
    //This is checking if the option that is coming in from the remove button click is not equal to an option it will be removed
    //It its true the option will be kept in array, making only the one click on will be deleted
    handleDeleteOption(optionToRemove) {
      this.setState(prevState => ({
        options: prevState.options.filter(option => optionToRemove !== option)
      }));
    }
  
    handlePick() {
      let random = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[random];
      alert(option);
    }
  
    handleAddOption(option) {
      if (!option) {
        return "Enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exists";
      }
      this.setState(prevState => ({ options: prevState.options.concat(option) }));
    }
    render() {
      const subtitle = "Put your life in the hands of a computer";
      return (
        <div>
          <Header subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption} />
        </div>
      );
    }
  }