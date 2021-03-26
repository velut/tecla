import React from 'react';

export function LoadIcon({
    className,
    'aria-label': ariaLabel = 'Load icon',
    title = 'Load Configuration',
    desc = 'Load configuration icon',
}: {
    className: string;
    'aria-label'?: string;
    title?: string;
    desc?: string;
}) {
    return (
        <svg
            className={className}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={ariaLabel}
        >
            <title>{title}</title>
            <desc>{desc}</desc>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
            />
        </svg>
    );
}
