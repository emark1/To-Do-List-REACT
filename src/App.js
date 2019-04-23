import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {ToDo} from './PendingItems.js'
import {CompletedTask} from './CompletedItems.js'

class App extends Component {

     constructor() {
       super()
       this.state = {
        task: '',
        tasks: [],
        completedTasks: []
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
         tasks: this.state.tasks.filter((item) => item != name)
       })
        this.setState({
          completedTasks: this.state.completedTasks.concat(name)
        })
        console.log("Completed Tasks:")
        console.log(this.state.completedTasks)
     }

     render() {
      return (
      <div>
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
