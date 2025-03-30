'use client';

import type { FC, ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

type BaseLayoutProps = {
    children: ReactNode;
    className?: string;
};

const BaseLayout: FC<BaseLayoutProps> = ({ children, className }) => (
    <main
        className={twMerge(
            'mx-4 mt-4 max-w-screen-xl sm:mx-8 sm:mt-8 md:mx-16 md:mt-12 lg:mx-32 lg:mt-16 xl:mx-auto xl:mt-20',
            className
        )}>
        {children}
    </main>
);

export default BaseLayout;
