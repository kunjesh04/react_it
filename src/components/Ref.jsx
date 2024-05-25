import React, { Component } from 'react'
import InpForm from './InpForm'

export default class Ref extends Component {
    constructor(props) {
        super(props)

        this.inputFormRef = React.createRef()

        /*
        Binding method in constructor will optimize performance as its binded only once (i.e. when its instantiated)
        Using callback functions over binding will reduce performance as its binded everytime the event occurs.
        */
        this.handleLogin = this.handleLogin.bind(this);
    }


    componentDidMount() {
        console.log(this.inputFormRef);
        this.inputFormRef.current.inputFocus();
    }

    // componentDidMount(){
    //     console.log(this.usernameRef.current.value);
    //     console.log(this.passwordRef.value);
    //     this.usernameRef.current.focus()
    //     // this.passwordRef.focus()
    // }

    handleLogin(event) {
        event.preventDefault();
        console.log('Submitted');

        // console.log('1'+this.inputFormRef.current)
        // console.log('2'+this.inputFormRef.current.usernameRef)
        // console.log('3'+this.inputFormRef.current.usernameRef.current)
        // console.log('4'+this.inputFormRef.current.usernameRef.current.value)
        // console.log('5'+this.inputFormRef.current.passwordRef.current.value)


        const usernameValue = this.inputFormRef.current.usernameRef.current.value;
        const passwordValue = this.inputFormRef.current.passwordRef.current.value;

        alert(`Username: ${usernameValue}, Password: ${passwordValue}`);
        return;
    }

    render() {
        return (
            <div>
                <h1>Ref Demo</h1>
                < InpForm ref={this.inputFormRef} handleLogin={this.handleLogin} />
            </div>
        )
    }
}
