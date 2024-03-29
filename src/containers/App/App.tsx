import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './App.scss';

import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import MobileNav from '../../components/MobileNav/MobileNav';
import DailyImage from '../../components/DailyImage/DailyImage';
import ImageSearch from '../ImageSearch/ImageSearch';
import Earth from '../Earth/Earth';

const App: React.FC = () => {
  return (
    <Router>
      <Logo />{' '}
      <nav className='nav-container'>
        {/* Renders either of these two, based on device size */}
        <div className='mobileMenu'>
          <MobileNav />
        </div>
        <div className='desktopMenu'>
          <Navigation />
        </div>
      </nav>
      <Route
        render={({ location }) => {
          return (
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                timeout={1000}
                classNames='page'>
                <div className='page-container'>
                  <Switch location={location}>
                    <Route path='/' exact component={() => <DailyImage />} />
                    <Route path='/images' component={() => <ImageSearch />} />
                    <Route path='/earth' component={() => <Earth />} />
                  </Switch>
                </div>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      />
    </Router>
  );
};

export default App;
