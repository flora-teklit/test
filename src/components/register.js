import React, { Component } from 'react'
import {
    TextField,
    Button,  
} from '@material-ui/core';
import Display from './Display';

export default class Register extends Component {
    
    constructor(props){
        super(props)
        this.state={
            name:'',
            lname:'',
            gname:''

        }
    }
    handleInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
          })      
    }
    handleSubmit=(e)=>{
        e.preventDefault()
    
        console.log(this.state)
      }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <TextField
        id="outlined-name"
        label="Name"
        type="name"
        name="name"
        margin="normal"
        variant="outlined"
        onChange={this.handleInput}
      />
      <TextField
        id="outlined-lname"
        label="lName"
        type="lname"
        name="lname"
        margin="normal"
        variant="outlined"
        placeholder="lname"
        onChange={this.handleInput}
      />
       <TextField
        id="outlined-gname"
        label="gName"
        type="gname"
        name="gname"
        margin="normal"
        placeholder="gname"
        variant="outlined"
        onChange={this.handleInput}
      />
            <br />
            
            <Button type="submit" size="small" color="primary" >
                  {this.props.name}
                </Button>
                
      </form>
      <Display name={this.state.name} lnmae={this.state.lname} gname={this.state.gname} />
      </div>
      
      
            
        )
    }
}
