import React from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component {
  constructor(props){
    super(props);
    console.log('Parent constructor')
  }
  componentDidMount(){
    console.log('Parent component did mount')
}
  render(){
    console.log('Parent render')
    return (
      <div>
          <h1>About</h1>
          <h2>We are learning ReactJS</h2>
          <UserClass name={'Aditya'} email={"aditya@yopmail.com"} location={"Haryana"}/>
          <UserClass name={'John'} email={"john@yopmail.com"} location={"US"}/>
      </div>
    )
  }
}


export default About;

/**
 - Parent constructor
 - Parent render

    - Aditya constructor
    - Aditya render
  
    - John constructor
    - John render

    <DOM UPDATED - IN SINGLE BATCH>
    - Aditya componentDidMount
    - John componentDidMount
 - Parent componentDidMount
 */