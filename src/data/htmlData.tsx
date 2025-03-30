import { siteMetadata } from '@/data/siteMetadata';

export const htmlLinkObject: Array<Omit<htmlLinkObjectType, 'id'>> = [
    {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: `${siteMetadata.siteUrl}/favicons/apple-touch-icon.png`
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `${siteMetadata.siteUrl}/favicons/favicon-32x32.png`
    },
    { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon-32x32.png' },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `${siteMetadata.siteUrl}/favicons/favicon-16x16.png`
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        href: `${siteMetadata.siteUrl}/favicons/favicon-512x512.png`
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: `${siteMetadata.siteUrl}/favicons/favicon-192x192.png`
    },
    {
        rel: 'manifest',
        href: '/manifest.webmanifest'
    },
    {
        rel: 'sitemap',
        href: `${siteMetadata.siteUrl}/sitemap.xml`
    }
];

export const htmlLinkObjectData: Array<htmlLinkObjectType> = htmlLinkObject.map((data) => {
    return {
        ...data,
        id: crypto.randomUUID()
    };
});

export type htmlLinkObjectType = {
    id: number | string;
    rel: string;
    sizes?: string;
    href?: string;
    type?: string;
};
