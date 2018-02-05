import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Task from './Task';

class TaskList extends Component {
	 render() {
	    return (
		 <div className="task-lists-container">
			    <div className="task-panel planned-tasks">
			    	<AppBar className='panel-title' title="Planned Tasks" />
			    	<Task />
			    </div>
			    <div className="task-panel work-in-progress">
			    	<AppBar className='panel-title' title="Work in Progress" />
			    	<Task />
			    	<Task />
			    	<Task />
			    	<Task />
			    </div>
			    <div className="task-panel blocked">
			    	<AppBar className='panel-title' title="Task Blocked" />
			    	<Task />
			    	<Task />
			    	<Task />
			    	<Task />
			    	<Task />
			    </div>
			    <div className="task-panel completed">
			    	<AppBar className='panel-title' title="Task Completed" />
			    	<Task />
			    	<Task />
			    	<Task />
			    	<Task />
			    	<Task />
			    </div>	
	      </div>
	    );
	  }
}
export default TaskList;