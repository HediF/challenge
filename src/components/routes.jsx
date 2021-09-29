import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './Views/Main/landingPage';
import History from './Views/History/historyPage';
import Crew from './Views/Crew/crew';
import Flights from './Views/Flights/flights';

function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/history" component={History}/>
                <Route exact path="/crew" component={Crew}/>
                <Route exact path="/flights" component={Flights}/>
            </Switch>
        </BrowserRouter>
    );
}
export default AppRouter;