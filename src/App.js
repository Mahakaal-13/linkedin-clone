import React from 'react';
import { useSelector } from 'react-redux';
import Feed from './App Body/Feed';
import Login from './App Body/Login';
import SideBar from './App Body/SideBar';
import './App.css';
import Header from './Header/Header';
import { selectUser } from './redux/userSlice';

function App() {


  const user = useSelector(selectUser)

  return (
    <div className="app">
      <Header />

      {!user ? <Login /> : (
        <div className="app__body">
          <SideBar />
          <Feed />
        </div>

      )}

      {/* <Widget/> */}
    </div>
  );
}

export default App;
