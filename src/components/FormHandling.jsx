import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FormHandling extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            userType: 'Guest'

        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { username, password, userType } = this.state;

        // Perform form validation
        if (!username || !password) {
            alert('Please enter both username and password');
            return;
        }

        // Submit form data
        console.log(`Username: ${username}, Password: ${password}, UserType: ${userType}`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    UserType:
                    <select name="userType" value={this.state.userType} onChange={this.handleInputChange}>
                        <option value="Guest">Guest</option>
                        <option value="Admin">Admin</option>
                    </select>
                </label>
                <br />
                <input type="submit" value="Login" />
            </form>
        );
    }
}
