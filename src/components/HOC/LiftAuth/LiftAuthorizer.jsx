import React, { Component } from 'react'

const Authorizer = (WrappedComponent) => {
    class Authorizer extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
              LiftName: '',
              User: '',
              Message: 'Pls Authorize First'
            }
        
            this.GenerateMessage = this.GenerateMessage.bind(this)
          }
        
        GenerateMessage(lift, user){
            console.log('Submitted...')
            const entryMsg = "Pls Enter the Lift"
            const noentryMsg = "Pls Use Different Lift"
            this.setState(
                {Message: (
                    (lift==="Lift1" && user==="Teacher") || 
                    (lift==="Lift2" && user==="Student")
                    ? entryMsg : noentryMsg)
        })
        }

        
        render() {
            return (
                <WrappedComponent 
                {...this.props}
                onSubmit={this.GenerateMessage}
                Message={this.state.Message}
                />
            )
        }

    }
    return Authorizer;
}

export default Authorizer;