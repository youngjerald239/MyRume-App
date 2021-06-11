import React from "react"
import Header from "./Header"
import './App.css';
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Widgets from "./Widgets"
import Login from "./Login"

function App() {
  const user = null;
  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <div>
          <Header />
          <div className="app__body">
          <Sidebar/>
          <Feed />
          <Widgets/>
          </div>
          </div>
        
      )}
    </div>
  );
}

export default App;
