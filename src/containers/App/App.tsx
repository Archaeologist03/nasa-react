import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './App.scss';

import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import MobileNav from '../../components/MobileNav/MobileNav';
import DailyImage from '../../components/DailyImage/DailyImage';
import ImageSearch from '../ImageSearch/ImageSearch';

const App: React.FC = () => {
  return (
    <Router>
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
                timeout={500}
                classNames='page'>
                <div className='page-container'>
                  <Logo />{' '}
                  <Switch location={location}>
                    > <Route path='/' exact component={() => <DailyImage />} />
                    <Route path='/images/' component={() => <ImageSearch />} />
                    <Route path='/earth/' render={() => <p> earth</p>} />
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
