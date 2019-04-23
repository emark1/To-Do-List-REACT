import React,{Component} from 'react';

export class CompletedTask extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        let completedTasks = this.props.completedTasks
        let taskItems = completedTasks.map((task) => {
            return (
                <li>{task}</li>
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