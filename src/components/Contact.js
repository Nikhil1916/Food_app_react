import { useEffect } from "react";

const Contact = () => {
  useEffect(()=>{
    console.log("Use effect");
    return ()=>{
      console.log("COmpinent unmount");
    }
  })
  return (
    <div className="font-bold text-3xl m-4 p-4">
      <h1>Contact Us</h1>
      <form className="flex flex-col mt-4">
        <input type="text" placeholder="Name" className="w-1/4 border border-gray p-2 mb-4" />
        <input type="text" placeholder="Message" className="w-1/4 border border-gray p-2 mb-4" />
        <button className="w-1/4 border border-gray p-2 mb-4 text-white bg-slate-400 rounded-lg">Submit</button>
      </form>
    </div>
  )
};


export default Contact;
