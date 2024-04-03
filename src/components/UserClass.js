import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        // console.log(this);
        // this.props = props;
        // console.log(this.props);
        this.state = {
            userInfo: {
                name: 'Dummy',
                defLocation: 'Ludhiana',
                dummyUrl: ''
            }
        };
        console.log("C contructor called");
    }

    async componentDidMount() {
        console.log("C component Mounted");
        const data = await fetch("https://api.github.com/users/Nikhil1916");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        console.log(json);
    }

    componentDidUpdate(prevProps, prevState , snapShot) {
        console.log("Component Did Update" , prevProps, prevState , snapShot);
    }

    componentWillUnmount() {
        console.log("Component Unmounted");
    }

 
    render() {
        console.log("C Component Render");
        return (
            <div className="user-card">
                <img width={200} height={200} src={this.state.userInfo.avatar_url} />
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location ?? 'Ludhiana'}</h3>
                <h4>Contact: @NikhilChawla</h4>
            </div>
        )
    }
}

export default UserClass;