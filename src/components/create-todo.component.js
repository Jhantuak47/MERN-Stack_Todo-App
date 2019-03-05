import React, {Component} from 'react'
import TodoForm from './todo-form.component.js';
import axios from 'axios';

export default class CreateTodo extends Component {

	constructor(props){
		super();
		this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
		this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
		this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);

		this.state = {
			todo_description: (props.todo) ? props.todo.todo_description : '',
			todo_responsible: (props.todo) ? props.todo.todo_responsible : '',
			todo_priority 	: (props.todo) ? props.todo.todo_priority: '',
			todo_completed 	: (props.todo) ? props.todo.todo_completed: false,
		}
	}

	onChangeTodoDescription(e){
		this.setState({
			todo_description: e.target.value
		});
	}

	onChangeTodoResponsible(e){
		this.setState({
			todo_responsible: e.target.value
		});
	}

	onChangeTodoPriority(e){
		this.setState({
			todo_priority: e.target.value
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		const newTodo = {
			todo_description:this.state.todo_description,
			todo_responsible:this.state.todo_responsible,
			todo_priority:this.state.todo_priority,
			todo_completed:this.state.todo_completed
		};

		(this.props.todo)
			? axios.post('http://localhost:4000/todos/update/' + this.props.todo._id, newTodo)
				   .then(res => console.log(res.data))
				   .catch(function(err) {
				   	console.log("error from update : " + err);
				    })
			: axios.post('http://localhost:4000/todos/add', newTodo)
			 	   .then(res => console.log(res.data))

	/*	this.setState({
				todo_description: '',
				todo_responsible: '',
				todo_priority: '',
				todo_completed:false
		})*/

		this.setState((prevState, props) => {
			return {
				todo_description: '',
				todo_responsible: '',
				todo_priority: '',
				todo_completed:false
			}
		});

	}

	render() {
		return (<TodoForm onSubmit = {this.onSubmit}
						  todo = {this.state}
						  onChangeTodoDescription = {this.onChangeTodoDescription}
						  onChangeTodoResponsible = {this.onChangeTodoResponsible}
						  onChangeTodoPriority = {this.onChangeTodoPriority}			
				/>);
	}
}