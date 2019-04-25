import React,{Component} from 'react';
import PieChart from 'react-minimal-pie-chart'

export class DisplayChart extends Component {


    render () {
        let checking = parseInt(this.props.checking)
        let saving = parseInt(this.props.saving)
        let brokerage = parseInt(this.props.brokerage)
        const classes = 'chart App-logo'
        console.log(checking)
        console.log(saving)
        return (
        <PieChart className={classes}
        data={[
            { title: 'One', value: checking, color: '#E38627' },
            { title: 'Two', value: saving, color: '#C13C37' },
            { title: 'Three', value: brokerage, color: '#6A2135' },
        ]}
        />)
}
}
