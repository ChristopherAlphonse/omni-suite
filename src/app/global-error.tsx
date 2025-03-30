'use client';

import type { FC } from 'react';

import Link from 'next/link';

import BaseLayout from '@/layout/base-layout';
import CenteredLayout from '@/layout/centered-layout';

import { ArrowBigRightIcon } from 'lucide-react';

const GlobalErrorPage: FC<{ error: Error }> = ({ error }) => {
    return (
        <html lang='en'>
            <body className='h-screen'>
                <BaseLayout>
                    <CenteredLayout>
                        <main className='flex h-screen flex-col items-center justify-center text-center text-neutral-200'>
                            <h1 className='text-6xl font-bold'>{error.name}</h1>
                            <h2 className='mt-4 text-2xl font-semibold text-neutral-200'>Internal Server Error</h2>
                            <p className='mt-4 max-w-md text-lg'>{error.message}</p>
                            <Link href='/' className='mt-6 flex items-center text-blue-500 hover:underline'>
                                Back to Home
                                <ArrowBigRightIcon className='ml-2' />
                            </Link>
                        </main>
                    </CenteredLayout>
                </BaseLayout>
            </body>
        </html>
    );
};

export default GlobalErrorPage;
