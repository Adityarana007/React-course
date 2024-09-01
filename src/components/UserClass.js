import React from 'react';

class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.name + 'child constructor')
        this.state = {
            count: 0,
        }
    }

    componentDidMount(){
        console.log(this.props.name +'child component did mount')
    }

    onCountClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        console.log(this.props.name + 'child render')

        const {name, location, email} = this.props;
        const {count} = this.state;
        return (
            <div className="user-card">
            <h2>{count}</h2>
            <button onClick={this.onCountClick}>Increment</button>
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Contact: {email}</h2>
        </div> 
        )
    }
}

export default UserClass;