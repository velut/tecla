import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon } from './HomeIcon';
import { InfoIcon } from './InfoIcon';
import { LoadIcon } from './LoadIcon';
import { NewIcon } from './NewIcon';
import { SettingsIcon } from './SettingsIcon';

export function NavigationDrawer() {
    return (
        <aside className="flex-none w-16 border-r border-gray-300 dark:border-gray-700">
            <ul className="flex flex-col items-center justify-between h-full py-4 max-h-72">
                <li>
                    <NavLink
                        className="block p-1"
                        activeClassName="text-blue-500"
                        title="Home"
                        to="/"
                        exact
                    >
                        <HomeIcon className="w-8 h-8" />
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        className="block p-1"
                        activeClassName="text-blue-500"
                        title="New Configuration"
                        to="/new"
                        exact
                    >
                        <NewIcon className="w-8 h-8" />
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        className="block p-1"
                        activeClassName="text-blue-500"
                        title="Load Configuration"
                        to="/load"
                        exact
                    >
                        <LoadIcon className="w-8 h-8" />
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        className="block p-1"
                        activeClassName="text-blue-500"
                        title="Settings"
                        to="/settings"
                        exact
                    >
                        <SettingsIcon className="w-8 h-8" />
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        className="block p-1"
                        activeClassName="text-blue-500"
                        title="Info"
                        to="/about"
                        exact
                    >
                        <InfoIcon className="w-8 h-8" />
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
}
