import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/InfoContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Faq from '../Faq/FaqContainer';
import List from '../List/ListContainer';
import SearchResults from '../SearchResults/SearchResultsContainer';

const App = () => (
  <BrowserRouter>
    <MainLayout>
	  <Switch>
	    <Route exact path='/' component={Home} />
	    <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={Faq} />
        <Route exact path="/list/:id" component={List} />
        <Route exact path="/search/:id" component={SearchResults} />
	  </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;