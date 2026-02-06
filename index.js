import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Login from './views/login'
import FigmadesignRevolutpng from './views/figmadesign-revolutpng'
import Assignmentpage from './views/assignmentpage'
import Profile from './views/profile'
import Coursepage from './views/coursepage'
import SWMiconsduotonedocumentcheck from './views/sw-miconsduotonedocumentcheck'
import Homepage from './views/homepage'
import Getstarted from './views/getstarted'
import Coursepage1 from './views/coursepage1'
import ScreenshotRevolutpng from './views/screenshot-revolutpng'
import Frame1 from './views/frame1'
import Register from './views/register'
import IPhone13mini1 from './views/i-phone13mini1'
import Exampage from './views/exampage'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Login} exact path="/login" />
        <Route
          component={FigmadesignRevolutpng}
          exact
          path="/figmadesign-revolutpng"
        />
        <Route component={Assignmentpage} exact path="/assignmentpage" />
        <Route component={Profile} exact path="/profile" />
        <Route component={Coursepage} exact path="/coursepage" />
        <Route
          component={SWMiconsduotonedocumentcheck}
          exact
          path="/sw-miconsduotonedocumentcheck"
        />
        <Route component={Homepage} exact path="/" />
        <Route component={Getstarted} exact path="/getstarted" />
        <Route component={Coursepage1} exact path="/coursepage1" />
        <Route
          component={ScreenshotRevolutpng}
          exact
          path="/screenshot-revolutpng"
        />
        <Route component={Frame1} exact path="/frame1" />
        <Route component={Register} exact path="/register" />
        <Route component={IPhone13mini1} exact path="/i-phone13mini1" />
        <Route component={Exampage} exact path="/exampage" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
