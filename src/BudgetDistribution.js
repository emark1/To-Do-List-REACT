import React,{Component} from 'react';

export class InputBudget extends Component {
    constructor () {
        super()
        this.state = {
            checking: 0,
            saving: 0,
            brokerage: 0
        
        }
    }

    handleCheckingChange = (e) => {
        this.setState({
            checking: e.target.value
        })
    }
    handleSavingChange = (e) => {
        this.setState({
            saving: e.target.value
        })
    }
    handleBrokerageChange = (e) => {
        this.setState({
            brokerage: e.target.value
        })
    }

    sendCheckingInfo = () => {
        this.props.checkingChangedCallback(this.state.checking)
    }
    sendSavingInfo = () => {
        this.props.savingChangedCallback(this.state.saving)
    }
    sendBrokerageInfo = () => {
        this.props.brokerageChangedCallback(this.state.brokerage)
    }


    handleChange = (e) => {

        this.setState({
            [e.target.name] : e.target.value   
        },() => {
            this.props.updateGraph(this.state)
        })
    }

    render() {
        return (
            <div>
                <input name="checking" onChange={this.handleChange} type="text" placeholder="Checking" />
                <button onClick={this.sendCheckingInfo}>Save Checking</button>
                <input name="saving" onChange={this.handleChange} type="text" placeholder="Savings"/>
                <button onClick={this.sendSavingInfo}>Save Savings</button>
                <input name="brokerage" onChange={this.handleChange} type="text" placeholder="Brokerage"/>
                <button onClick={this.sendBrokerageInfo}>Save Brokerage</button>
            </div>
        )
    }
}