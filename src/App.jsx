import React, { Component } from 'react';
import { Provider } from "react-redux";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route} from "react-router-dom";
import  store from './store'


// Components
import details from './components/Details'
import Editdetails from './components/editDetails'
  
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Router>
                        <Switch>
                            <Route exact={true} path="/" component={details} />
                            <Route exact={true} path="/editDetails/:_id" component={Editdetails} />
                        </Switch>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;