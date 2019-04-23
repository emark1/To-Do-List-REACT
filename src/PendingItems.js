import React,{Component} from 'react';

export class ToDo extends Component {

    completeTask = (name) => {
        console.log(name)
        this.props.completeTask(name)
    }

    render() {
        let tasks = this.props.tasks
        let taskItems = tasks.map((task) => {
            return (
                <li>{task} <button onClick={() => this.completeTask(task)}>Mark As Complete</button></li>
            )
        })
        return (
          <div>
            <ul>
                {taskItems}
            </ul>
          </div>
        )
    
      }

}