import { useEffect } from "react";

const Contact = () => {
  useEffect(()=>{
    console.log("Use effect");
    return ()=>{
      console.log("COmpinent unmount");
    }
  })
  return <h1 style={{ margin: "1rem" }}>Contact.js</h1>;
};


export default Contact;
