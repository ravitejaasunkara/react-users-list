import logo from './logo.svg';
import './App.css';
import Adduser from './components/AddUser/Adduser';
import { useState } from 'react';
import Allusers from './components/AllUsers/Allusers';
const ALL_USERS = [];
function App() {
  const [allUsers,updateAllUsers] = useState(ALL_USERS);
  const updateUsers = (newData) => {
    updateAllUsers(prevUsers => {
      return [...prevUsers,newData];
    })
  }
  return (
    <div className="App">
      <Adduser updateUsersList={updateUsers}/>
      <Allusers usersList={allUsers}></Allusers>
    </div>
  );
}

export default App;
