import { Switch, Route } from 'react-router-dom';
import { HomePage, BisPage } from './pages';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/bis" component={BisPage} />
      </Switch>
    </div>
  );
}

export default App;
