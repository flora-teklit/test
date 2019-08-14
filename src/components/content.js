import React, { Component } from "react";
import {
  Grid,
 
  Button,
  TextField
} from "@material-ui/core";
export default class Content extends Component {


   constructor(props) {
       super(props)
       this.state={
         email:'',
         password:''
       }
   }
   handleInput=(e)=>{
    //console.log(e.target.value);
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
      <div className="login">
        <Grid container spacing={5}>
          <Grid item xs={12}>
           
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
              
               
                  <TextField
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    onChange={this.handleInput}
                    variant="outlined"
                  />

                  <br />
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    onChange={this.handleInput}

                    margin="normal"
                    variant="outlined"
                  />
               
              
                <Button type="submit" size="small" color="primary">
                  LOGIN
                </Button>
            
              </form>
           
          </Grid>
        </Grid>
      </div>
    );
  }
}
