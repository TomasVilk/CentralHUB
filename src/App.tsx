import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WorkSpace from './pages/WorkSpace';
import Home from './pages/Home';
import Library from './pages/Library';
import Navigation from './organisms/Navigation';
import { TimerProvider } from './hooks/timer-context';

export const App = () => (
  <Router>
    <main className="flex min-h-screen min-w-screen">
      <TimerProvider>
        <Navigation />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/workspace">
              <WorkSpace />
            </Route>
            <Route path="/library">
              <Library />
            </Route>
          </Switch>
        </div>
      </TimerProvider>
    </main>
  </Router>
);

export default App;
