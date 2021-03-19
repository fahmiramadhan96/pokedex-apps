import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router'
import Homepage from '../src/container/homepage'
import Details from '../src/container/details'

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/details" component={Details}/>
        </Switch>
    </div>
  );
}

export default App;
