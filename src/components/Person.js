import React, { Component } from 'react'
const Person=(props)=>{
 
        return ( 
            <div>
        <p>I am {props.name}  and i am {props.age}</p>
        <p> {props.children}</p>
        </div>
        )
    
}
export default Person;