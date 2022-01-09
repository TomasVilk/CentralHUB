import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WorkSpace from './pages/WorkSpace';
import Home from './pages/Home';
import Library from './pages/Library';
import Navigation from './organisms/Navigation';
import { TimerProvider } from './custom/timer-context';

export const App = () => (
  <Router>
    <main className="box-border flex min-h-screen min-w-screen">
      <TimerProvider>
        <Navigation />
        <div>
          <Switch>
            <Route exact path="/CentralHUB">
              <Home />
            </Route>
            <Route path="/CentralHUB/workspace">
              <WorkSpace />
            </Route>
            <Route path="/CentralHUB/library">
              <Library />
            </Route>
          </Switch>
        </div>
      </TimerProvider>
    </main>
  </Router>
);

export default App;
