import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, task: "Drink 5 ltr Water", completed: false },
        { id: 2, task: "Go to Gym", completed: true },
        { id: 3, task: "Complete To-do assignment within 2 days", completed: false }
      ],
      newTask: '' // New task added by the user
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  handleAddTask = () => {
    const { todos, newTask } = this.state;
    if (newTask.trim() == '') {
      alert('Please enter a task')
      return null;
    }
      const newTodo = {
        id: todos.length + 1,
        task: newTask,
        completed: false
      };
      this.setState({
        todos: [...todos, newTodo],
        newTask: ''
      });
  };
  handleCheck=(id)=>{
    const checkbox=[...this.state.todos]
    checkbox[id].completed=!checkbox[id].completed
    this.setState({todos:checkbox})
  }
  render() {
    const { todos, newTask } = this.state;

    return (
      <div className="container mt-8  col-md-12" style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
        <h1 style={{ color: '#333' }}>Todo List</h1>
       
        <ul className="list-group">
          {todos.map((todo,i) => (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center"
              style={{ backgroundColor: '#fff', margin: '5px 0', border: '1px solid #ccc' }}
            >
              <div className="d-flex align-items-center">
                <input type='checkbox' className="mr-3 custom-checkbox" 
                checked={todo.completed} onChange={()=>this.handleCheck(i)}/>
                <span>{todo.task}</span>
              </div>
              <span className={`badge ${todo.completed ? 'bg-success' : 'bg-danger'} badge-pill`}>
                {todo.completed ? 'Completed' : 'Not Completed'}
              </span>
            </li>
          ))}
        </ul>
        <div className="input-group mt-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new task..."
            value={newTask}
            onChange={this.handleInputChange}
            style={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={this.handleAddTask}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
