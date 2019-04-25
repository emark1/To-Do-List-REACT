import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {ToDo} from './PendingItems.js'
import {CompletedTask} from './CompletedItems.js'
import {InputName} from './InputName.js'
import {DisplayName} from './DisplayName.js'
import PieChart from 'react-minimal-pie-chart'
import {InputBudget} from './BudgetDistribution.js'
import {DisplayChart} from './GraphDistribution.js'

class App extends Component {

     constructor() {
       super()
       this.state = {
        task: '',
        tasks: [],
        completedTasks: [],
        name: '',
        checking: 0,
        saving: 0,
        brokerage: 0,
       }
     }


    
     handleSaveClick = () => {
       let task = this.state.task
       this.setState({
         tasks: this.state.tasks.concat(task)
       })
       console.log(this.state.tasks)
     }

     handleTextChange = (text) => {
       console.log(text.target.value)
       this.setState({
         task: text.target.value
       })
     }

     completeTask = (name) => {
       console.log("Complete task firing")
      //  let task = this.state.task
       this.setState({
         tasks: this.state.tasks.filter((item) => item !== name)
       })
        this.setState({
          completedTasks: this.state.completedTasks.concat(name)
        })
        console.log("Completed Tasks:")
        console.log(this.state.completedTasks)
     }

     handleNameChange = (name) => {
       this.setState({
         name: name
       })
     }

     handleCheckingChange = (checking) => {
       this.setState({
         checking: checking
       })
     }
     handleSavingChange = (saving) => {
      this.setState({
        saving: saving
      })
    }
    handleBrokerageChange = (brokerage) => {
      this.setState({
        brokerage: brokerage
      })
    }

    handleStateChange = (e) => {
      this.setState(e)
    }

    // checking: checking,
    // saving: saving,
    // brokerage: brokerage
     render() {
      return (
      <div>
        <InputBudget updateGraph={this.handleStateChange} />


        {/* <InputBudget stateChangedCallback={this.handleStateChange}/> */}

        {/* checkingChangedCallback={this.handleCheckingChange}
        savingChangedCallback={this.handleSavingChange}
        brokerageChangedCallback={this.handleBrokerageChange} */}

        <DisplayChart checking={this.state.checking}
        saving = {this.state.saving}
        brokerage = {this.state.brokerage}/>
        


        <InputName nameChangedCallback={this.handleNameChange}/>
        <DisplayName name={this.state.name}/>
        <p></p>
        <h1>To-Do List!</h1>
        <input onChange={this.handleTextChange} type="text" />
        <button onClick={this.handleSaveClick}>Save</button>
        <ToDo  tasks = {this.state.tasks} completeTask={this.completeTask}/>

        <h1>Completed Tasks:</h1>
        <ToDo tasks = {this.state.completedTasks} />

      </div>
      );
    }

}

export default App;
