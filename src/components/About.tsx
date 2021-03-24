import React from 'react';

export function About() {
    return (
        <section className="flex flex-col flex-grow h-0 space-y-4">
            <h1 className="text-2xl font-bold">About</h1>

            <div className="overflow-y-auto">
                <ul>
                    {Array.from(Array(100).keys()).map((i) => {
                        return <li key={i}>{i}</li>;
                    })}
                </ul>
            </div>
        </section>
    );
}
