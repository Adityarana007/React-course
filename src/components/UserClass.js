import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " child constructor");
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        avatarUrl: "",
        location: 'Default'
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name + " child component did mount");
    const data = await fetch("https://api.github.com/users/Adityarana007");
    const resJson = await data.json();
    console.log("githubApiResponse_", resJson);
    this.setState({
        userInfo: {
            name: resJson?.name,
            location: resJson?.location,
            avatarUrl: resJson?.avatar_url
        }
    })
  }


  render() {
    console.log(this.props.name + " child render");

    // const { name, location, email } = this.props;
    const { name, location, avatarUrl } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        {/* <h2>Contact: {email}</h2> */}
        <img className="imgGit" src={avatarUrl}/>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
