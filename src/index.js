import React from 'react'
import ReactDOM from 'react-dom'

import 'semantic-ui-css/semantic.min.css'

import Layout from './components/Layout'
import App from './containers/App.jsx'
import Table1 from './containers/Table1'
import Table2 from './containers/Table2'
import About from './components/About'

import registerServiceWorker from './registerServiceWorker'
import store from './store/configureStore'
import {Provider} from 'react-redux'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
<Provider store={store}>
  <Router history={history}>
    {/* <Route path="/"> */}
    <Route path="/" component={Layout} >
        <IndexRoute component={App} />
        <Route path="about" component={About}/>
        <Route path="table1" component={Table1}/>
        <Route path="table2" component={Table2}/>
    </Route>
  </Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();





