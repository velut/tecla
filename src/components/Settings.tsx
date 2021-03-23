import React from 'react';
import { ThemeSettings } from './ThemeSettings';

export function Settings() {
    return (
        <section className="space-y-4">
            <h1 className="text-2xl font-bold">Settings</h1>

            <ThemeSettings />
        </section>
    );
}
