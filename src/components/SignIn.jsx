import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component{
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

SignIn(){
    console.log('this.state',this.state);
    const { email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
     
        this.setState({error})
        
    })
}



    render(){
        return(
            <div className="topmargin">
            <h2> Sign In</h2>
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
                    className="signinbutton btn btn-primary"
                    type="button"                    
                    onClick={()=> this.SignIn()}
                    >
                        Sign In
                    </button>
               
                    <div>{this.state.error.message}</div>
                <div><Link to={"/signup"} >Sign Up Instead</Link></div>
                </div>
                
                

            </div>
            </div>
        )
    }
} 

export default SignIn;