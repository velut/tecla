import React from 'react';
import { Page } from './Page';

export function About() {
    return (
        <Page title="About">
            <ul>
                {Array.from(Array(100).keys()).map((i) => {
                    return <li key={i}>{i}</li>;
                })}
            </ul>
        </Page>
    );
}
