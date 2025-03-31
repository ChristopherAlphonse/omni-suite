import { MetadataRoute } from 'next';

import { siteMetadata } from '@/data/siteMetadata';
import { createCompleteUrl } from '@/utils/helpers';

export default function manifest(): MetadataRoute.Manifest {
    const icons = [
        {
            src: '/logo/icon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
            purpose: 'maskable'
        },
        {
            src: '/logo/icon0.svg',
            sizes: '16x16',
            type: 'image/png',
            purpose: 'maskable'
        },
        {
            src: '/logo/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
        },
        {
            src: '/logo/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
        }
    ];

    return {
        name: 'Omni Suite',
        short_name: 'OmniSuite',
        description: siteMetadata.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#0d121c',
        theme_color: '#0d121c',
        icons: icons.map((icon) => ({
            ...icon,
            src: createCompleteUrl(icon.src),
            purpose: icon.purpose as 'maskable' | 'any' | 'monochrome' | undefined
        }))
    };
}
