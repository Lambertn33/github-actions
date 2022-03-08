import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [users , setUsers] = useState([])
  const [isLoading , setIsLoading] = useState(false)

  useEffect(()=>{
    const fetchUsers = async() =>{
      setIsLoading(true)
      const { data:users } = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(users)
      setIsLoading(false)
     }
     fetchUsers()
  },[])
  return (
    <div className="App">
       <h2>Users List</h2>
       {
         isLoading && <h2>Please wait ....</h2>
       }
       {
         users.map(user=>{
           return <h2>{user.name}</h2>
         })
       }
    </div>
  );
}

export default App;
