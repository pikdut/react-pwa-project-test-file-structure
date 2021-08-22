import React from 'react';
import './styles/App.scss';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import routes from './router';

const devSyle = {
  minHeight: '90vh',
  display: 'flex',
  flexDirection: 'column'
}

function App () {
  return (
    <> 
      <Header />
        <section style={devSyle}>
          <Router>
            <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                    key={idx}
                    exact
                    path={route.path}>
                    <route.component />
                </Route>
                ) : (null);
              })}
            </Switch>
          </Router>
        </section>
      <Footer />
    </>
  )
}

export default App;
