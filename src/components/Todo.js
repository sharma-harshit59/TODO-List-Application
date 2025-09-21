import React, { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTask: "",
        };
    }

    onChange = (e) => {
        this.setState({ newTask: e.target.value });
    };

    addTask = (e) => {
        e.preventDefault();
        const { newTask, tasks } = this.state;
        if (newTask.trim() === "") return;

        const taskObj = {
            id: Date.now(),
            title: newTask,
            completed: false,
        };

        this.setState({
            tasks: [...tasks, taskObj],
            newTask: ""
        });
    };

    toggleComplete = (id) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
        }));
    };

    render() {
        return (
            <div className="todo-container">
                <h1 className="title">TO-DO LIST</h1>
                <form className="todo-form" onSubmit={this.addTask}>
                    <input type="text" placeholder="Enter your task..." value={this.state.newTask} onChange={this.onChange} required />
                    <button type="submit">+ Add</button>
                </form>

                <ul className="task-list">
                    {this.state.tasks.map((task) => (
                        <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
                            <label>
                                <input type="checkbox" checked={task.completed} onChange={() => this.toggleComplete(task.id)} />
                                <span>{task.title}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Todo;