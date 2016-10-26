import React from 'react';

export default class AddTask extends React.Component {
	 constructor(props) {
    super(props);
    this.state = {Tasks : [],text : ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.taskCompleted = this.taskCompleted.bind(this);
  }

	render()
	{
		return (
			<div>
			     <TaskItems items={this.state.Tasks} callback ={this.taskCompleted}/>
                 <input onChange={this.handleChange} value={this.state.text} />
                 <button onClick= {this.handleSubmit} >{'Add Task'}</button>
            </div>
			)
	}
	handleChange(e) {
    this.setState({text: e.target.value});
    }

    taskCompleted(task,e) { 
    	let CopyOfTask = this.state.Tasks;
    	CopyOfTask.splice(this.state.Tasks.indexOf(task),1);
    	this.setState((prevState) => ({
    		Tasks: CopyOfTask,
            text: ''
    }));
    }

  handleSubmit(e) {
    var newTask = {    	
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      Tasks: prevState.Tasks.concat(newTask),
      text: ''
    }));
  }
}

class TaskItems extends React.Component{
render()
{	
return(
	<ul>
       {this.props.items.map(item => (
       	<div key={item.id}>
          <li onClick={this.props.callback.bind(this,item)}>{item.text}
          <i className="fa fa-check"></i>
          </li>
        </div>  
        ))}
    </ul>
	)	
}
}


