import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';

import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import DailyImage from './components/DailyImage/DailyImage';
import HamburgerIcon from './components/HamburgerIcon/HamburgerIcon';

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        {/* <header className='App-header' /> */}
        {/* <Logo /> */}
        {/* <Navigation /> */}
        <HamburgerIcon />
      </div>

      <div style={{ border: '2px solid yellow' }}>
        <Route path='/' exact component={DailyImage} />
        <Route path='/images/' render={() => <p> images</p>} />
        <Route path='/earth/' render={() => <p> earth</p>} />
      </div>
    </Router>
  );
};

export default App;
