import { useState } from "react";

const Create = (props) => {
      const user = props.users;
      const setUsers = props.setUsers

      const [fullname, setfullname] = useState("");
      const [age, setage] = useState("");

    const submitHandler = (e)=>{
    e.preventDefault();
    const newUser = {fullname , age}
    console.log(newUser)
   }
    
  return (
    <div>
        <h1>Register User</h1>
      <form onSubmit={submitHandler}>
        <input 
        onChange={(e)=>setfullname(e.target.value)}
        value = {fullname}
        type="text"
        placeholder="fullname"
         />
         <br />
        <input 
        onChange={(e)=>setage(e.target.value)}
        value = {age}
        type="number"
        placeholder="age"
         />
    
      <button>submit</button>
      </form>
    </div>
  )
}

export default Create
