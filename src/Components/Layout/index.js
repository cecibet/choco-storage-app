import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import App from "../App/App";

const Layout = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/App" component={App} />
                <Route exact path="/" component={App}>
                    <Redirect to="/App" />
                </Route>
            </Switch>
        </div>
    )
}
export default Layout;
