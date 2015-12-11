import Main from "./Main";
import Hi from "./hi";
import React from "react";
import {Router, Route} from "react-router";

/**
 * The React Router 1.0 routes for both the server and the client.
 */
export default (
	<Router>
		<Route path="/" component={Main} />
		<Route path="/hi" component={Hi} />
	</Router>
);
