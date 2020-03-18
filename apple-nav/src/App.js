import React, { useState } from "react";
import "./App.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
//import ReactDOM from "react-dom";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import data from "./data";
import Home from "./components/Home.js";
import About from "./components/About.js";
import SubNav from "./components/SubNav.js";

console.log(About);

const App = () => {
    const [linksState, setState] = useState(data);

    const toLowerCase = (link) => {
        return link.replace(/\s+/g, "-").toLowerCase();
    };

    return (
        <div className="App">
            <div className="header">
                <div className="wrapper">
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        {linksState.map((link) => {
                            return (
                                <NavLink
                                    to={`/${toLowerCase(link.parent)}`}
                                    key={link.id}
                                >
                                    {link.parent}
                                </NavLink>
                            );
                        })}
                        <NavLink to="/about">About Me</NavLink>
                    </nav>
                </div>
            </div>

            <Route
                render={({ location }) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            timeout={300}
                            classNames="fade"
                        >
                            <Switch location={location}>
                                <Route exact path="/" component={Home} />
                                <Route path="/about" component={About} />
                                <Route
                                    path="/:productName"
                                    render={(props) => {
                                        return (
                                            <SubNav
                                                {...props}
                                                links={linksState}
                                                toLowerCase={toLowerCase}
                                            />
                                        );
                                    }}
                                />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}
            />
        </div>
    );
};

export default App;
