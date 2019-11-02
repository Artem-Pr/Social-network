import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  debugger;
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          {/* <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile}/> */}

          <Route path="/dialogs"
            render={ () => <DialogsContainer /> } />
          <Route path="/profile"
            render={ () => <Profile /> }/>
        </div>
      </div>
  );
}

export default App;
