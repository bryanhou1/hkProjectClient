import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Table1 from './containers/Table1';
import Table2 from './containers/Table2';
import registerServiceWorker from './registerServiceWorker';
import store from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
<Provider store={store}>
  <Router history={history}>
      <Route path="/" component={App} />
      <Route path="table1" component={Table1}/>
      <Route path="table2" component={Table2}/>

  </Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();





