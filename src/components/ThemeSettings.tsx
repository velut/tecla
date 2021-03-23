import React, { useState } from 'react';

export function ThemeSettings() {
    const [darkTheme, setDarkTheme] = useState(
        localStorage.darkTheme === 'true'
    );

    const toggleDarkTheme = ({ enabled }: { enabled: boolean }) => {
        setDarkTheme(enabled);
        localStorage.darkTheme = `${enabled}`;

        if (enabled) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <section className="space-y-1">
            <h2 className="text-xl font-bold">Theme</h2>

            <ul>
                <li className="flex items-center space-x-4">
                    <label htmlFor="dark-theme-setting">Dark theme</label>

                    <input
                        className="w-4 h-4 rounded"
                        id="dark-theme-setting"
                        name="dark-theme-setting"
                        type="checkbox"
                        checked={darkTheme}
                        onChange={(event) => {
                            toggleDarkTheme({ enabled: event.target.checked });
                        }}
                    />
                </li>
            </ul>
        </section>
    );
}
