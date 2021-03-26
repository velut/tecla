import React from 'react';
import { NewConfigForm } from './NewConfigForm';
import { Page } from './Page';

export function NewConfig() {
    return (
        <Page title="New Configuration">
            <NewConfigForm />
        </Page>
    );
}
