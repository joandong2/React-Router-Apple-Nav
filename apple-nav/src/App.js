import React, { useState } from "react";
import "./App.css";

import ReactDOM from "react-dom";
import { Route, Link } from "react-router-dom";
import data from "./data";
import Home from "./components/Home.js";
import SubNav from "./components/SubNav.js";

const App = () => {
    const [linksState, setState] = useState(data);

    const toLowerCase = (link) => {
        return link.replace(/\s+/g, "-").toLowerCase();
    };

    return (
        <div className="App">
            <div class="header">
                <div className="wrapper">
                    <nav>
                        <Link to="/">Home</Link>
                        {linksState.map((link) => {
                            return (
                                <Link
                                    to={`/${toLowerCase(link.parent)}`}
                                    key={link.id}
                                >
                                    {link.parent}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
            <Route exact path="/" component={Home} />
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
        </div>
    );
};

export default App;
