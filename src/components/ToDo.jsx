import React, { Component, createElement } from 'react'

export default class ToDo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            taskArr: []
        }
        this.addTask = this.addTask.bind(this);
    }

    addTask(event) {
        event.preventDefault();
        let newTask = event.target.task.value;
        const newTaskObj = {
            id: Date.now(),
            task: newTask
        }
        const isDuplicate = this.state.taskArr.some((item)=> item.task === newTask)
        if (isDuplicate){
            alert('Task Already Exists');
            event.target.task.value = '';
            return;
        }
        if (newTask.trim() !== "") {
            this.setState({
                taskArr: [...this.state.taskArr, newTaskObj]
            });
            event.target.task.value = '';
        } else {
            alert('Task Name should not be Empty');
        }
    }

    removeTask(id) {
        this.setState({
            taskArr: this.state.taskArr.filter((task) => task.id != id)
        });
    }

    render() {
        return (
            <div >
                <h2>To Do List </h2>
                <form onSubmit={this.addTask} style={{ margin: "15px", boxSizing: "content-box" }}>
                    <input type='text' name='task' placeholder='task'></input>
                    <br />
                    <button type="submit" style={{ margin: "15px" }}>Add</button>
                </form>
                <ol>
                    {this.state.taskArr.map((task) => {
                        return (
                            <li key={task.id}>
                                {task.task}
                                <button onClick={() => this.removeTask(task.id)}>Remove</button>
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}
