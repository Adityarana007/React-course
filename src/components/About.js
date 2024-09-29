import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    console.log("Parent component did mount");
    this.timer = setInterval(() => {
      console.log('Called every second')
    }, 1000);
  }

  // called when our any state variable updated
  componentDidUpdate(){
    console.log('component mounting cycyle completed --- update cycle starts');
  }

  // when this component will disappear from the web page(UI)
  componentWillUnmount(){
    console.log('component unmounted successfully...')
    clearInterval(this.timer);
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>We are learning ReactJS</h2>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>Check Info</button>
        <p>{this.state.count}</p>
        <UserClass
          name={"Aditya"}
          email={"aditya@yopmail.com"}
          location={"Haryana"}
        />
      </div>
    );
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



