import React, { Component } from 'react'
import Authorizer from './LiftAuthorizer'

class Lifts extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(event.target.lift.value, event.target.user.value);
    };
    render() {
        let {Lift, User, Message} = this.props
        return (
            <div>
                <h4>Lift 1 is for Teachers</h4>
                <h4>Lift 2 is for Students</h4>
                <h3>Check Below </h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="lift">Choose a lift:</label>
                        <select id="lift" name="lift">
                            <option value="">-- Please choose an option --</option>
                            <option value="Lift1">Lift1</option>
                            <option value="Lift2">Lift2</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="user">Choose a user type:</label>
                        <select id="user" name="user">
                            <option value="">-- Please choose an option --</option>
                            <option value="Student">Student</option>
                            <option value="Teacher">Teacher</option>
                        </select>
                    </div>

                    <button type="submit">Submit</button>
                </form>
                <div>
                    <h2>{Message}</h2>
                </div>
            </div>
        )
    }
}

export default Authorizer(Lifts)
