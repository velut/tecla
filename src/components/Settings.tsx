import React from 'react';
import { Page } from './Page';
import { ThemeSettings } from './ThemeSettings';

export function Settings() {
    return (
        <Page title="Settings">
            <ThemeSettings />
        </Page>
    );
}
