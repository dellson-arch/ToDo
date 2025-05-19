import { useState } from "react"
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {


  const[user , setUsers] = useState([
    {name:"john" , age : 12},
    {name : "Ankur" , age : 32},
    {name : "Ayush" , age: 22}
  ]);

  
    
  return (
    <div>
     <Create/>
     <Read  users={user} setUser={setUsers} />
    </div>
  )
}

export default App
