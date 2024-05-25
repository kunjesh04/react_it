import React, { Component } from 'react'

export default class InpForm extends Component {
    constructor(props) {
        super(props)

        this.usernameRef = React.createRef()
        this.passwordRef = React.createRef()

        /* 
          Below code snippet also creates ref only. 
          It's raw code which is not preferred as it will return element while 
          React method of createRef will return as object.  
          */

        // this.passwordRef = null
        // this.passwordRefInit = (element) => {
        //     this.passwordRef = element
        // }
        this.state = {
            username: '',
            password: ''
        }

    }

    inputFocus(){
        this.usernameRef.current.focus()
    }
    render() {
        return (
            <div>
                <form action="/login" method='post' onSubmit={this.props.handleLogin}>
                    <input type="text" name='username' placeholder='Username' ref={this.usernameRef} required />
                    <br />
                    <input type="password" name='password' placeholder='Password' ref={this.passwordRef} required />
                    <br />
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}
