import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/content";
import Footer from "./components/Footer";
import { Grid, Button } from "@material-ui/core";
import Register from "./components/register";
import Person from "./components/Person";
class App extends Component {
  render() {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid container>
          <Grid item xs={4} className="sidebar">
            <img src={logo} className="App-logo" alt="logo" />
          </Grid>
          <Grid item xs={4} id="new">
            <Register name="hello alex" />
            <form onSubmit={this.handleSubmit} />
            <br />
            <Person name="nani" age="22">
             new user
            </Person>
          </Grid>
          <Grid item xs={4}>
            <Content />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    );
  }
}

export default App;
