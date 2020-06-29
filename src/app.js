import React from "react"

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import { Route, Switch } from 'react-router-dom'

function App() {
    return (
        <main>
            <Navbar />
            <Switch>
                <Route path="/" component={Header} exact />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route component={Error} />
            </Switch>
        </main>
    )
}

export default App;
