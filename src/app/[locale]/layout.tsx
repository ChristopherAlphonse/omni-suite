import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';

import { htmlLinkObjectData, htmlLinkObjectType } from '@/data/htmlData';
import { metadata } from '@/data/siteMetadata';
import { routing } from '@/i18n/routing';

import '../globals.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});
export { metadata };
export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const { locale } = params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale} className='dark scroll-smooth' suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
                {htmlLinkObjectData.map((urlData: htmlLinkObjectType) => {
                    const { href, rel, sizes, type } = urlData;

                    return <link key={href} rel={rel} href={href} type={type} sizes={sizes} />;
                })}
            </body>
        </html>
    );
}
