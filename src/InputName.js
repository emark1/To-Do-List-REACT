import React,{Component} from 'react';

export class InputName extends Component {
    constructor () {
        super()
        this.state = {
            name: ''
        
        }
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleButtonClick = () => {
        this.props.nameChangedCallback(this.state.name)
    }



    render() {
        return (
            <div>
                <input onChange={this.handleNameChange} type="text" />
                <button onClick={this.handleButtonClick}>Apply Name</button>
            </div>
        )
    }
}