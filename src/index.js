import React from 'react'
import ReactDOM from 'react-dom'

import 'semantic-ui-css/semantic.min.css'

import Layout from './components/Layout'
import App from './containers/App.jsx'
import Table1 from './containers/Table1'
import Table2 from './containers/Table2'
import About from './components/About.jsx'

import registerServiceWorker from './registerServiceWorker'
import store from './store/configureStore'
import {Provider} from 'react-redux'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import * as CONST from './config/url'
import ReactGA from 'react-ga';


ReactGA.initialize('UA-119855147-1');
// import {ActionCableProvider} from 'react-actioncable-provider'

function fireTracking() {
  ReactGA.pageview(window.location.hash);
}

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
<Provider store={store}>
    <Router onUpdate={fireTracking} history={history}>
      <Route path="/" component={Layout} >
        <IndexRoute component={App} />
        <Route path="about" component={About}/>
        {/* <ActionCableProvider url={CONST.API_WS_URL}> */}
          <Route path="table1" component={Table1}/>
          <Route path="table2" component={Table2}/>
        {/* </ActionCableProvider> */}
      </Route>
    </Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();





