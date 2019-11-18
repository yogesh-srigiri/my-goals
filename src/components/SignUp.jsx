import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignUp extends Component{
constructor(props){
    super(props);
    this.state ={
     email: '',
     password: '',
     error: {
         message: ''
     }   
    }
}

SignUp(){
    console.log('this.state',this.state);
    const { email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
     
        this.setState({error})
        
    })
}



    render(){
        return(
            <div className="topmargin">
                <h2> Sign Up</h2>
            <div className="form-inline" style={{margin: '5%'}}>
                
                <div className="form-group">
                    <input 
                    className="form-control"
                    type="text"
                    placeholder="email"
                   onChange={event => this.setState({email:event.target.value})}
                   style={{marginRight: '5px'}}
                   />
                    <input 
                    className="form-control"
                    type="password"
                    placeholder="password"
                    onChange={event => this.setState({password:event.target.value})}
                   style={{marginRight: '5px'}}
                   />
                    <button
                    className="btn btn-primary"
                    type="button"                    
                    onClick={()=> this.SignUp()}
                    >
                        Sign Up
                    </button>
                    <div>{this.state.error.message}</div>
<div><Link to={"/signin"}>Already a user? Sign in instead.</Link></div>
                </div>
                


            </div>
            </div>
        )
    }
} 

export default SignUp;