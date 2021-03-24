import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MainContent } from './MainContent';
import { NavigationDrawer } from './NavigationDrawer';
import { StatusBar } from './StatusBar';

export function AppContainer() {
    return (
        <MemoryRouter>
            <div className="flex flex-col w-screen h-screen overflow-hidden text-gray-900 bg-white dark:bg-gray-800 dark:text-gray-200">
                <div className="flex flex-grow">
                    <NavigationDrawer />

                    <MainContent />
                </div>

                <StatusBar />
            </div>
        </MemoryRouter>
    );
}
