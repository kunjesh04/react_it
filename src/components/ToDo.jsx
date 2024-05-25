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
        if (newTask.trim() !== "") {
            this.setState({
                taskArr: [...this.state.taskArr, newTask]
            });
            event.target.task.value = '';
        } else {
            alert('Task Name should not be Empty');
        }
    }

    removeTask(index) {
        this.setState({
            taskArr: this.state.taskArr.filter((task, i) => i != index)
        });
    }

    render() {
        return (
            <div >
                <h2>To Do List </h2>
                <form onSubmit={this.addTask} style={{margin:"15px", boxSizing:"content-box"}}>
                    <input type='text' name='task' placeholder='task'></input>
                    <br/>
                    <button type="submit" style={{margin:"15px"}}>Add</button>
                </form>
                <ol>
                    {this.state.taskArr.map((task, index) => {
                        return (<li key={index}>
                            {task}
                            <button onClick={() => this.removeTask(index)}>Remove</button>
                        </li>)
                    })}
                </ol>
            </div>
        )
    }
}
