import type { Metadata } from 'next';

import { baseUrl, createCompleteUrl } from '../utils/helpers';

/** @type {import("pliny/config").PlinyConfig } */
export const siteMetadata = {
    title: 'Christopher Alphonse',
    headerTitle: 'Omni Suite',
    description: 'Welcome to Omni Suite your all in one application store.',
    language: 'en-us',
    siteUrl: baseUrl,
    siteLogo: createCompleteUrl('/favicons/favicon-32x32.png'),
    socialBanner: createCompleteUrl('/opengraph-image.webp'),
    github: 'https://github.com/ChristopherAlphonse',
    linkedin: 'https://www.linkedin.com/in/christopheralphonse/',
    locale: 'en-US'
};

export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.siteUrl!),
    title: siteMetadata.title,
    description: siteMetadata.description,
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        url: siteMetadata.siteUrl,
        siteName: siteMetadata.title,
        images: [siteMetadata.socialBanner],
        locale: 'en_US',
        type: 'website'
    },
    alternates: {
        canonical: siteMetadata.siteUrl
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    twitter: {
        title: siteMetadata.title,
        card: 'summary_large_image',
        images: [siteMetadata.socialBanner]
    }
};
