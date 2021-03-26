import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from './About';
import { Home } from './Home';
import { LoadConfig } from './LoadConfig';
import { NewConfig } from './NewConfig';
import { Settings } from './Settings';

export function MainContent() {
    return (
        <main className="flex flex-col flex-grow">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/new">
                    <NewConfig />
                </Route>

                <Route path="/load">
                    <LoadConfig />
                </Route>

                <Route path="/settings">
                    <Settings />
                </Route>

                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </main>
    );
}
