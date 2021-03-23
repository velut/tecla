import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from './HomeIcon';
import { InfoIcon } from './InfoIcon';
import { LoadIcon } from './LoadIcon';
import { NewIcon } from './NewIcon';
import { SettingsIcon } from './SettingsIcon';

export function NavigationDrawer() {
    return (
        <aside className="w-16 h-full border-r border-gray-300 dark:border-gray-700">
            <ul className="flex flex-col items-center justify-between h-full py-4 max-h-72">
                <li>
                    <Link className="block p-1" to="/">
                        <HomeIcon className="w-8 h-8" />
                    </Link>
                </li>

                <li>
                    <Link className="block p-1" to="/new">
                        <NewIcon className="w-8 h-8" />
                    </Link>
                </li>

                <li>
                    <Link className="block p-1" to="/load">
                        <LoadIcon className="w-8 h-8" />
                    </Link>
                </li>

                <li>
                    <Link className="block p-1" to="/settings">
                        <SettingsIcon className="w-8 h-8" />
                    </Link>
                </li>

                <li>
                    <Link className="block p-1" to="/about">
                        <InfoIcon className="w-8 h-8" />
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
