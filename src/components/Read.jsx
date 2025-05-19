const Read = (props) => {
      const user = props.users;
      const setUsers = props.setUsers

      const renderUser = user.map((users, index)=>{
      return <li key = {index}>{users.name}</li>
   })

  return (
    <div>
        <h1>user details</h1>
       <ol>{renderUser}</ol>
    </div>
  )
}

export default Read
