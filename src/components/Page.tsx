import React from 'react';

export function Page({
    title,
    children,
}: {
    title: string;
    children?: React.ReactNode;
}) {
    return (
        <section className="flex flex-col flex-grow h-0 p-4 space-y-4">
            <h1 className="text-2xl font-bold">{title}</h1>

            <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-thumb-rounded">
                {children}
            </div>
        </section>
    );
}
