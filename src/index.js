import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider,  } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './containers/App';
import Blog from './containers/Blog';
import reducer from './reducers';
import NotFound from './containers/NotFound';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} ></Route>
      <Route path="/blogs/:id" component={Blog} ></Route>
      <Route path="*" component={NotFound} ></Route>
    </Switch>
    </BrowserRouter>  
  </Provider>,
  document.getElementById('root')
);
