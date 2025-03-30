import type { MetadataRoute } from 'next';

import { baseUrl, createCompleteUrl } from '../utils/helpers';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/*'
            }
        ],
        sitemap: createCompleteUrl('sitemap.xml'),
        host: baseUrl
    };
}
