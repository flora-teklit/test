import React, { Component } from 'react'
import {
    TextField,
    Button,  
} from '@material-ui/core';
const Display=(props)=>{
 
    return ( 
        <div>
    <p>I am {props.name} {props.lname} {props.gname}</p>
    <p> {props.children}</p>
    </div>
    )

}   

export default Display
