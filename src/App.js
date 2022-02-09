import React from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Home from './components/home';
import View from './components/students/view';
import Edit from './components/students/edit';
import Navbar from './components/navbar/navbar';
import Graph from './components/graphs/graph';
import Details from './components/students/details';
import Registration from './components/login/registration';
import Login from './components/login/login';
import Redux from './components/redux-practice/redux';
import Logout from './components/login/logout';
import Main from './components/role/main';
import User from './components/role/user';
import Moderator from './components/role/moderator';
import Admin from './components/role/admin';

function App() {
  return (
      <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/view/:id" element={<View />}></Route>
    <Route path="/edit/:id" element={<Edit />}></Route>
    <Route path="/viewDetails" element={<Details />}></Route> 
    <Route path="/graph" element={<Graph />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/register" element={<Registration />}></Route>
    <Route path="/redux" element={<Redux />}></Route>
     <Route path="/logout" element={<Logout />}></Route> 
     {/* <Route path="/main" element={<Main />}></Route> */}
     <Route path="/user" element={<User />}></Route>
     <Route path="/admin" element={<Admin />}></Route>
     <Route path="/moderator" element={<Moderator />}></Route>
    
    </Routes>
    </BrowserRouter>
      </>


  );
}

export default App;
