import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <Router>
	      <div className="container">
	      	<nav className="navbar navbar-expand-lg navbar-light bg-light">
	      		<a href="google.com" className="navbar-brand" target="_blank">
	      			<img src={logo} alt="google" width="30" height="30"/>
	      		</a>
	      		<Link className="navbar-brand" to="/">MERN-Stack Todo App</Link>
				<div className="nav-collapse">
					<ul className="navbar-nav mr-auto">
						<li className="navbar-item">
							<Link to="/" className="nav-link">Todos</Link>
						</li>
						<li className="navbar-item">
							<Link to="/create" className="nav-link">Create Todo</Link>
						</li>
					</ul>
				</div>
	      	</nav>
	      	<Route path="/" exact component={TodosList}></Route>
	      	<Route path="/edit/:id" component={EditTodo}></Route>
	      	<Route path="/create" component={CreateTodo}></Route>
	      </div>
      </Router>
    );
  }
}

export default App;
