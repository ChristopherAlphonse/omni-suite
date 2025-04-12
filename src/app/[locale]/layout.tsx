import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';

import { metadata } from '@/data/siteMetadata';
import getMessages from '@/i18n/request';
import { routing } from '@/i18n/routing';

import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export { metadata };

type Props = Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>;

export default async function RootLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as 'en' | 'fr')) {
        notFound();
    }

    const messages = await getMessages({ requestLocale: Promise.resolve(locale) });

    return (
        <html lang={locale} className='dark scroll-smooth' suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
