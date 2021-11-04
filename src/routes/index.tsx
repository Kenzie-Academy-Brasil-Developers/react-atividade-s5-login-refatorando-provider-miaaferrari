import {Switch, Route} from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { LoginPage } from '../pages/Login';


export const Routes = () => {

    return (
        <Switch>
            <Route exact path='/'>
                <LoginPage />                
            </Route>
            <Route exact path='/dashboard'>               
                <Dashboard />               
            </Route>
        </Switch>
    )
}