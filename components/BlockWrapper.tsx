import React from 'react';

type BlockWrapperProps = {
    children: React.ReactNode;
    padding?: number;
    className?: string;
};

export const BlockWrapper = ({
    children,
    padding = 24,
    className,
}: BlockWrapperProps) => {
    return (
        <div
            style={{
                padding,
                boxSizing: 'border-box',
                width: '100%',
            }}
            className={className}
        >
            {children}
        </div>
    );
};
