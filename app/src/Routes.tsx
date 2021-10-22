import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Main from './components/main/Index';

import DeployList from './pages/deployList/Index'
import DeployEdit from './pages/deployEdit/Index'

const Routes = () => {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect from="/" to="/list" />
                </Route>
                <Main path='/list' component={DeployList} />
                <Main path='/edit' component={DeployEdit} />
            </Switch>
        </BrowserRouter>
        
    )

}

export default Routes