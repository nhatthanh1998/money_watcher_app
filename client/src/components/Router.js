import React, {Component } from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import ActivitiesBoard from '../container/ActivitiesBoard'
export const history = createHistory()
export default class Routes extends Component{
    render(){
        return(
            <Router history = {history}>
                <Switch>
                    <Route exact path ="/" component ={ActivitiesBoard}></Route>
                </Switch>
            </Router>
        )
    }
}