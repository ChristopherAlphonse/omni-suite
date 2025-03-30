'use client';

import type { FC } from 'react';

import BaseLayout from '@/layout/base-layout';
import CenteredLayout from '@/layout/centered-layout';

const ErrorPage: FC<{ error: Error }> = ({ error }) => {
    return (
        <html lang='en-US'>
            <body>
                <BaseLayout>
                    <CenteredLayout>
                        <main className='bg-neutral-950 pt-5 text-neutral-200'>
                            You are seeing this {error.name} because:
                            <CenteredLayout>
                                <p className='mt-9 max-w-fit pb-9 text-center text-6xl'>{error.message}</p>
                            </CenteredLayout>
                            <div className='pt-20'>{error.stack}</div>
                        </main>
                    </CenteredLayout>
                </BaseLayout>
            </body>
        </html>
    );
};

export default ErrorPage;
