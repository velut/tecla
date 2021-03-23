import React from 'react';
import { Route, Switch } from 'react-router-dom';

export function MainContent() {
    return (
        <main className="h-full">
            <Switch>
                <Route exact path="/">
                    <p>Home</p>
                </Route>

                <Route path="/new">
                    <p>New</p>
                </Route>

                <Route path="/load">
                    <p>Load</p>
                </Route>

                <Route path="/settings">
                    <p>Settings</p>
                </Route>

                <Route path="/about">
                    <p>About</p>
                </Route>
            </Switch>
        </main>
    );
}
