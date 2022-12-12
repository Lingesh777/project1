import React,{Component} from 'react';
class Counter1 extends Component{
    state={
        count:0,
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecrement=()=>{
        this.setState({count:this.state.count-1})
    }
    check=()=>{
        if(this.state.count===5){
            throw new Error('Crashed');
        }
    }
    render(){
        return(
            <div>
                <this.check/>
                <button onClick={this.handleIncrement}>Increment</button>
                <span>{this.state.count}</span>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }
};
export default Counter1;