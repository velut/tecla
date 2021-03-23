import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MainContent } from './MainContent';
import { NavigationDrawer } from './NavigationDrawer';
import { StatusBar } from './StatusBar';

export function AppContainer() {
    return (
        <MemoryRouter>
            <div className="w-screen h-screen text-gray-900 bg-white">
                <div className="flex flex-col h-full">
                    <div className="flex flex-grow">
                        <div>
                            <NavigationDrawer />
                        </div>

                        <div className="flex-grow">
                            <MainContent />
                        </div>
                    </div>

                    <div>
                        <StatusBar />
                    </div>
                </div>
            </div>
        </MemoryRouter>
    );
}
