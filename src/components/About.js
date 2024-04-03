import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {

  constructor(props) {
    super(props);
    console.log("P constructor");
  }

  
  componentDidMount() {
    console.log("P Component Mounted");
  }
  
  render() {
    console.log("P render");
    return (
      <div style={{ margin: "1rem" }}>
        <div>
          <h1>About</h1>
          <h2>This is food ordering app</h2>
          {/* <User name="Nikhil A" /> */}
          <UserClass name="Nikhil C" />
        </div>
      </div>
    );
  }
};

export default About;
