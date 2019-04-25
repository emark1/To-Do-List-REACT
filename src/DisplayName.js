import React,{Component} from 'react';

export class DisplayName extends Component {
    render() {
        const noNameMessage = <div>No Name Dummy!</div>
        let name = this.props.name
        if(name.length == 0) {
            return noNameMessage
        } else {
            return <div>{this.props.name}</div>
        }
    }
}