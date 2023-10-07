import {useState}  from 'react';
import UserProfile from './UserProfile';
import './App.css';


const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer'
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer'
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer'
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer'
  }
]


function App() {

  const [userList, setUserList] = useState(initialUserDetailsList); //INITILAIZED A ARRAY
  const [searchInput, setSearchInput] = useState("")

  const onChnageUsersList = (e)=>{
   setSearchInput(e.target.value)
  }

  const deleteUser = uniqueNo=>{
    const deletedUsers = userList.filter(user => user.uniqueNo !== uniqueNo)
    setUserList(deletedUsers);
  }

  const filteredUsers = userList.filter((user)=>user.name.toLowerCase().includes(searchInput));

  
  

  return (
    <div className="App">
      <h1 className='p-2'>User List</h1>
      <input 
      type='search' 
       className='formc-control p-2'
       placeholder='search name'
       onChange={onChnageUsersList}
       value={searchInput}/>
       
      {filteredUsers.length >0 ? (
      <ul>
        {filteredUsers.map((eachUser)=>(
          <UserProfile 
          key={eachUser.uniqueNo}
          userDetails = {eachUser}
          deleteUser={deleteUser}
          />
        )
        
        )}
      </ul>):(<p>no users found</p>)}
    </div>
  );
}

export default App;
