import logo from './logo.svg';
import './App.css';
import AppHeader from './components/header';
import AppFooter from './components/footer';
import ContactsList from './components/ContactsList';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Profile from './components/profile';
import PageNotFound from './components/pageNotFound';
import {  useEffect, useState } from 'react';
import AddContact from './components/AddContact';
import LoginPage from './components/LoginPage';


function App() {
  // const UserContext=createContext()
  const[contacts, setContacts]=useState([]);
  const[IsloggedIn, setIsloggedIn]=useState(false);
  // const user=useContext(UserContext)
  useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => setContacts(data))
 }
  ,[])
  useEffect(()=>{
    if (localStorage.getItem("token")=="ahmed"){
      setIsloggedIn(true)
    }
    else{
      setIsloggedIn(false)
    }
   }
    ,[])
  
  console.log(contacts)

  return (
    <>
   
    {/* <ContactsList></ContactsList> */}
    {/* <UserContext.Provider value={user}> */}
    <BrowserRouter>
    <AppHeader></AppHeader>
    <Routes>
      {contacts && <Route path="/" element={<ContactsList data={contacts}/>}/>}
      {contacts && <Route path="/home" element={<ContactsList data={contacts}/>}/>}
     
     
      <Route path="/addcontact" element={<AddContact/>}/>
      <Route path="/profile/:id" element= {IsloggedIn ? <Profile/>: <LoginPage handleLogin={setIsloggedIn}/>}/>
      <Route path="/login" element={<LoginPage handleLogin={setIsloggedIn}/>}/>
        <Route path="*" element={<PageNotFound/>}/>

  
    </Routes>
    </BrowserRouter>
    <AppFooter></AppFooter>
    {/* </UserContext.Provider> */}
    </>
  );
}

export default App;
