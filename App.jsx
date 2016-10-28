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
                 <input onChange={this.handleChange} value={this.state.text} />
                 <button onClick= {this.handleSubmit} >{'Add Task'}</button>
                 <TaskItems items={this.state.Tasks} callback ={this.taskCompleted}/>
      </div>
			)
	}
	handleChange(e) {
    this.setState({text: e.target.value});
    }

    taskCompleted(task,e) { 
    	let CopyOfTask = this.state.Tasks;
    	//CopyOfTask.splice(this.state.Tasks.indexOf(task),1);
      let index= this.state.Tasks.indexOf(task);
      if(index>=0 && index<CopyOfTask.length)
      {
          CopyOfTask[index].status = 'Completed';
      }      
    	this.setState((prevState) => ({
    		Tasks: CopyOfTask,
            text: ''
    }));
    }

  handleSubmit(e) {
    var newTask = {    	
      text: this.state.text,
      id: Date.now(),
      status:'Inprogress'
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
	if(this.props.items.length>0)
  {
    return(
       <table className="table table-bordered">
          <thead className="thead-default">
            <tr>
              <th>Task</th>
              <th colspan="2">Completed / Remove</th>
            </tr>
          </thead>
          <tbody>
          {this.props.items.map(item => (
            <tr key={item.id}>
              <td>{item.text}</td>
              <td className="Icon" onClick={this.props.callback.bind(this,item)}><i className="fa fa-check" title="Completed"></i></td>
              <td className="Icon" onClick={this.props.callback.bind(this,item)}><i className="fa fa-eraser" title="Remove"></i></td>
            </tr>  
           ))}
          </tbody>
        </table>  
      ) 
  } 
  return(null)
}
}

export class Suite extends React.Component {
   constructor(props) {
    super(props);
    this.state = {suite : [
                            {xAxis:'20',yAxis:'20',width:"40",height:"40",spec:"Meeting Room",text:"C-12",id:1,
                              svgStyle:{
                                          fill:'#007cd1',
                                          cx:2,
                                          cy:2,
                                          stroke:'black'
                                        }
                            },
                           {xAxis:'20',yAxis:'60',width:"40",height:"120",spec:"Meeting Room",text:"C-11",id:2,
                              svgStyle:{
                                          fill:'#007cd1',
                                          cx:2,
                                          cy:2,
                                          stroke:'black'
                                        }
                            },
                            {xAxis:'60',yAxis:'20',width:"20",height:"160",spec:"Walk Way",text:"",id:3,
                              svgStyle:{
                                          fill:'black',
                                          cx:2,
                                          cy:2,
                                          stroke:'black'
                                        }
                            },
                           {xAxis:'80',yAxis:'20',width:"60",height:"20",spec:"Rasgnya",text:"150",id:4,
                              svgStyle:{
                                          fill:'red',
                                          cx:2,
                                          cy:2,
                                          stroke:'black'
                                        }
                            },
                           {xAxis:'140',yAxis:'20',width:"60",height:"20",spec:"Shared Space",text:"",id:5,
                              svgStyle:{
                                          fill:'grey',
                                          cx:2,
                                          cy:2,
                                          stroke:'black'
                                        }
                            },
                            {xAxis:'200',yAxis:'20',width:"60",height:"20",spec:"Feroz",text:"155",id:6,
                              svgStyle:{
                                          fill:'red',
                                          cx:2,
                                          cy:2,
                                          stroke:'black'
                                        }
                            },
                            {xAxis:'80',yAxis:'40',width:"40",height:"20",spec:"Rasgnya",text:"",id:7,
                              svgStyle:{
                                          fill:'red',
                                          cx:2,
                                          cy:2,
                                          stroke:'black'
                                        }
                            },
                           {xAxis:'120',yAxis:'40',width:"100",height:"20",spec:"free Space",text:"",id:8,
                              svgStyle:{
                                          fill:'white',
                                          cx:2,
                                          cy:2,
                                          stroke:'black'
                                        }
                            },
                            {xAxis:'220',yAxis:'40',width:"40",height:"20",spec:"Feroz",text:"",id:9,
                              svgStyle:{
                                          fill:'red',
                                          cx:2,
                                          cy:2,
                                          stroke:'black'
                                        }
                            },
                            {xAxis:'80',yAxis:'60',width:"180",height:"20",spec:"Walk Way",text:"",id:10,
                              svgStyle:{
                                          fill:'black',
                                          cx:2,
                                          cy:2,
                                          stroke:'black'
                                        }
                            },
                            {xAxis:'80',yAxis:'80',width:"40",height:"20",spec:"Un Allocated",text:"",id:11,
                              svgStyle:{
                                          fill:'green',
                                          cx:2,
                                          cy:2,
                                          stroke:'black'
                                        }
                            },
                           {xAxis:'120',yAxis:'80',width:"100",height:"20",spec:"free Space",text:"",id:12,
                              svgStyle:{
                                          fill:'white',
                                          cx:2,
                                          cy:2,
                                          stroke:'black'
                                        }
                            },
                            {xAxis:'220',yAxis:'80',width:"40",height:"20",spec:"Un Allocated",text:"",id:13,
                              svgStyle:{
                                          fill:'green',
                                          cx:2,
                                          cy:2,
                                          stroke:'black'
                                        }
                            },
                            {xAxis:'80',yAxis:'100',width:"60",height:"20",spec:"Un Allocated",text:"161",id:14,
                              svgStyle:{
                                          fill:'green',
                                          cx:2,
                                          cy:2,
                                          stroke:'black'
                                        }
                            },
                           {xAxis:'140',yAxis:'100',width:"60",height:"20",spec:"Shared Space",text:"",id:15,
                              svgStyle:{
                                          fill:'grey',
                                          cx:2,
                                          cy:2,
                                          stroke:'black'
                                        }
                            },
                            {xAxis:'200',yAxis:'100',width:"60",height:"20",spec:"Un Allocated",text:"160",id:16,
                              svgStyle:{
                                          fill:'green',
                                          cx:2,
                                          cy:2,
                                          stroke:'black'
                                        }
                            },
                           ]};
  }

  render()
  {
    return (
      <div>
       <CustomShape items={this.state.suite}/>
      </div>
      )
  }
}

export class CustomShape extends React.Component
{
  render()
  { 
  const textStyle = 
  {
    textAnchor : 'middle',
    alignmentBaseline : 'central'
  };
    return(
           <div id="WorkLocation">
            <svg>
            {this.props.items.map(item => (
                <g key={item.id} width={item.width} height={item.height}>
                    <title>{item.spec}</title>
                    <rect x={item.xAxis} y={item.yAxis} width={item.width} height={item.height} style={item.svgStyle}/>
                    <text fill="white" textAnchor="middle" alignmentBaseline="central"
                          x={parseInt(item.xAxis)+(parseInt(item.width)/2)} 
                          y={parseInt(item.yAxis)+(parseInt(item.height)/2)}> {item.text} </text>
                         
                </g>
              ))
            }
            </svg>
          </div>
       )
  }
}



