import React, {Component} from 'react';
import axios from 'axios';
import TodoForm from './todo-form.component.js';


const Completed = (props) => (
		<div>
		<div className="form-check">
			<input type="checkbox" 
				   className="form-check-input"
				   id= "completedCheckbox"
				   name="completedCheckbox"
				   onChange={props.onChangeTodoCompleted}
				   checked = {props.todo.todo_completed}
				   value={props.todo.todo_completed} 
		    />
		    <label htmlFor="completedCheckbox" className="form-check-label">
				Completed
		    </label>
		</div>
		<br/></div>
	)

export default class EditTodo extends Component {

	constructor(props){
		super(props);
		this.state = {
			todo_description: (props.todo) ? props.todo.todo_description : '',
			todo_responsible: (props.todo) ? props.todo.todo_responsible : '',
			todo_priority 	: (props.todo) ? props.todo.todo_priority: '',
			todo_completed 	: (props.todo) ? props.todo.todo_completed: false,
		};
	}

	componentDidMount(){
		axios.get('http://localhost:4000/todos/'+ this.props.match.params.id)
			 .then(res => {
			 	this.setState({
			 		todo_description: res.data.todo_description,
			 		todo_responsible: res.data.todo_responsible,
			 		todo_priority 	: res.data.todo_priority,
			 		todo_completed 	: res.data.todo_completed
			 	});
			 })
			 .catch(function(err){
			 	console.log('error from edit-todo',err);
			 });
	}

	onChangeTodoDescription = (e) => {
		this.setState({
			todo_description: e.target.value
		});
	}

	onChangeTodoResponsible = (e) => {
		this.setState({
			todo_responsible: e.target.value
		});
	}

	onChangeTodoPriority = (e) => {
		this.setState({
			todo_priority: e.target.value
		});
	}
	
	onChangeTodoCompleted = (e) => {
		console.log('first', this.state);
		this.setState(
			{
				todo_completed:!(this.state.todo_completed)
			}
		);
		console.log('onchange : ', this.state);
	}

	onSubmit = (e) => {
		e.preventDefault();
		const obj = {
			todo_description:this.state.todo_description,
			todo_responsible:this.state.todo_responsible,
			todo_priority:this.state.todo_priority,
			todo_completed:this.state.todo_completed,
		};
		axios.post('http://localhost:4000/todos/update/' + this.props.match.params.id, obj)
			 .then(res => console.log(res.data))
			 .then(this.props.history.push('/'));
	}
	render() {

		return (

			<TodoForm onSubmit = {this.onSubmit}
						  todo = {this.state}
						  onChangeTodoDescription = {this.onChangeTodoDescription}
						  onChangeTodoResponsible = {this.onChangeTodoResponsible}
						  onChangeTodoPriority = {this.onChangeTodoPriority}			
			>
			
			<Completed todo = {this.state}
					   onChangeTodoCompleted = {this.onChangeTodoCompleted}
					   />
			</TodoForm>
		);
	}
}
