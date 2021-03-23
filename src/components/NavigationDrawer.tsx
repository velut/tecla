import React from 'react';
import { HomeIcon } from './HomeIcon';
import { InfoIcon } from './InfoIcon';
import { LoadIcon } from './LoadIcon';
import { NewIcon } from './NewIcon';
import { SettingsIcon } from './SettingsIcon';

export function NavigationDrawer() {
    return (
        <aside className="h-full border-r border-gray-300 w-14">
            <ul className="flex flex-col items-center justify-between flex-grow h-full py-4">
                <li className="p-2">
                    <HomeIcon className="w-8 h-8" />
                </li>

                <li className="p-2">
                    <NewIcon className="w-8 h-8" />
                </li>

                <li className="p-2">
                    <LoadIcon className="w-8 h-8" />
                </li>

                <li className="p-2">
                    <SettingsIcon className="w-8 h-8" />
                </li>

                <li className="p-2">
                    <InfoIcon className="w-8 h-8" />
                </li>
            </ul>
        </aside>
    );
}
