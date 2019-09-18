import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Question, Validation} from "./components";


function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path='/' exact component={Validation}/>
                    <Route path='/question' exact component={Question}/>
                </Switch>
            </div>
        </Router>
  );
}

export default App;
