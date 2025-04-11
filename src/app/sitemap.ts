import { createCompleteUrl } from '@/utils/helpers';

export default async function sitemap() {
    const statics = ['sitemap.xml', 'robots.txt', 'manifest.webmanifest', 'og'];

    const staticRoutes = statics.map((p) => ({
        url: createCompleteUrl(p),
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'yearly',
        priority: 0.9
    }));

    return [...staticRoutes];
}
