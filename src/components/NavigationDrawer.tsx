import React from 'react';
import { CogIcon } from './CogIcon';

export function NavigationDrawer() {
    return (
        <aside className="w-16 h-full bg-green-200 border-r border-black">
            <ul className="flex flex-col items-center justify-between flex-grow h-full py-4 bg-indigo-500">
                {Array.from(Array(5).keys()).map((id) => (
                    <li key={id} className="bg-pink-400">
                        <CogIcon className="w-8 h-8" />
                    </li>
                ))}
            </ul>
        </aside>
    );
}
