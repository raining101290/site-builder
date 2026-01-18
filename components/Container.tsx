import React from 'react';

type ContainerProps = {
    children: React.ReactNode;
    paddingY: number;
    paddingX: number;
    backgroundColor: string;
    // maxWidth: number;
    fullWidth: boolean;
};

export const Container = ({
    children,
    paddingY,
    paddingX,
    backgroundColor,
    // maxWidth,
    fullWidth,
}: ContainerProps) => {
    return (
        <section
            style={{
                backgroundColor,
                width: '100%',
            }}
        >
            <div
                style={{
                    maxWidth: fullWidth ? '100%' : '1200px',
                    margin: '0 auto',
                    padding: `${paddingY}px ${paddingX}px`,
                    boxSizing: 'border-box',
                }}
            >
                {children}
            </div>
        </section>
    );
};
