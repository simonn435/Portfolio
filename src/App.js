import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AboutRoute from "./components/routes/AboutRoute";
import ProjectsRoute from "./components/routes/ProjectsRoute";
import HomeRoute from "./components/routes/HomeRoute";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/about'>
                        <AboutRoute />
                    </Route>
                    <Route path='/projects'>
                        <ProjectsRoute />
                    </Route>
                    <Route path='/'>
                        <HomeRoute />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
