import { Geist, Geist_Mono } from 'next/font/google';

import { htmlLinkObjectData, htmlLinkObjectType } from '@/data/htmlData';
import { metadata, siteMetadata } from '@/data/siteMetadata';

import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});
export { metadata };
export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang={siteMetadata.language} className='dark scroll-smooth'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
            {htmlLinkObjectData.map((urlData: htmlLinkObjectType) => {
                const { href, rel, sizes, type } = urlData;

                return <link key={href} rel={rel} href={href} type={type} sizes={sizes} />;
            })}
        </html>
    );
}
