import React, { ReactNode } from 'react';

interface EmptyLayoutProps {
    children: ReactNode;
}

export default function EmptyLayout({ children }: EmptyLayoutProps) {
    return (
        <main className='relative'>
            {children}
        </main>
    );
}
