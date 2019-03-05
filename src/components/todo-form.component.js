import React from 'react';
 
const TodoForm = (props) => (

		<div style={{marginTop:20}}>
				<form onSubmit = {props.onSubmit}>
					<div className="form-group">
						<label htmlFor="description">Description:</label>
						<input type="text" 
							   className="form-control"
							   value={props.todo.todo_description} 
							   onChange = {props.onChangeTodoDescription}
							    />
					</div>
					<div className="form-group">
						<label htmlFor="description">Responsible:</label>
						<input type="text" 
							   className="form-control"
							   value={props.todo.todo_responsible} 
							   onChange = {props.onChangeTodoResponsible}
							    />
					</div>
					<div className="form-group form-check form-check-inline">
						<input type="radio"
							   className="form-check-input"
							   name = "priorityOptions"
							   id="priorityLow"
							   value = "Low"
							   checked = {props.todo.todo_priority === 'Low'}
							   onChange ={props.onChangeTodoPriority}
							   />
						<label className="form-check-label">Low</label>
					</div>
					<div className="form-group form-check form-check-inline">
						<input type="radio"
							   className="form-check-input"
							   name = "priorityOptions"
							   id="priorityMedium"
							   value = "Medium"
							   checked = {props.todo.todo_priority === 'Medium'}
							   onChange ={props.onChangeTodoPriority}
							   />
						<label className="form-check-label">Medium</label>
					</div>
					<div className="form-group form-check form-check-inline">
						<input type="radio"
							   className="form-check-input"
							   name = "priorityOptions"
							   id="priorityHigh"
							   value = "High"
							   checked = {props.todo.todo_priority === 'High'}
							   onChange ={props.onChangeTodoPriority}
							   />
						<label className="form-check-label">High</label>
					</div>
					{props.children}
					<div className="form-group">
						<input type="submit" value="Create Todo" className="btn btn-primary"/>
					</div>
				</form>
			</div>
	);

export default TodoForm;