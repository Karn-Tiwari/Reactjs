import React, { Component } from 'react'

class Todo extends Component {
  constructor() {
     super();
     this.state={
        tasks:[{tasks:'Check mails',id:1},{tasks:'Check twitter',id:2},{tasks:'Check whatsapp',id:3},{tasks:'Check Linkedin',id:4},{tasks:'Check instagram',id:5}],
        currTask:''
     }
  }
  handleChange=(e)=>{
    console.log(e.target.value);
    this.setState({
        currTask:e.target.value
    })
    }
    handleSubmit = (e) => {
        this.setState({
            tasks:[...this.state.tasks,{tasks:this.state.currTask,id:this.state.tasks.length+1}],
            currTask:''
        })
    }
  render(){
    return(
        <div>
            <input type="text"value={this.state.currTask} onChange ={this.handleChange}/>
           < button onClick = {this.handleSubmit}>Submit</button>
           {
                this.state.tasks.map((taskObj)=>{
                    <li key={taskObj.id}>
                        <p>{taskObj.id}</p>
                        <button>Delete</button>
                    </li>
                })
           }
        </div>
    )
  }
}
export const arr = [1, 2, 3, 4, 5];
export default Todo;
