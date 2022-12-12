import React,{Component} from "react"
import Hoc from "./hoc"
class Like extends React.Component{
  constructor(props){
    super(props)
    this.state={
        like:0,
    }
  }
  handleClick=()=>{
    this.setState({
        like:this.state.like+1
    })
  }
  render(){
    return(
        <div>
            {this.state.like}<br/>
            <button onClick={this.handleClick}>Add like</button>
        </div>
    )
  }
}
const EnhancedLike=Hoc(Like);
export default EnhancedLike;
