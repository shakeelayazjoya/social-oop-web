'use client';

import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

export const Button = ({ children, className = '', ...props }: ButtonProps) => {
    return (
        <button
            className={`bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
