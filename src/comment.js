import React,{Component} from "react"
export default class Comment extends React.Component{
  constructor(props){
    super(props)
    this.state={
        comment:0,
    }
  }
  handleClick=()=>{
    this.setState({
        comment:this.state.comment+1
    })
  }
  render(){
    return(
        <div>
            {this.state.comment}<br/>
            <button onClick={this.handleClick}>Add comment</button>
        </div>
    )
  }
}
