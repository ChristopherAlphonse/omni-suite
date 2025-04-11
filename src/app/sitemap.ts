import { createCompleteUrl } from '@/utils/helpers';

export default async function sitemap() {
    const statics = ['sitemap.xml', 'robots.txt', 'manifest.webmanifest', 'og'];

    const staticRoutes = statics.map((p) => ({
        url: createCompleteUrl(p),
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'yearly',
        priority: 0.9
    }));

    const routes = ['', 'about', 'blog', 'og', 'rss'].map((path) => ({
        url: createCompleteUrl(path),
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'yearly',
        priority: 1
    }));

    return [...routes, ...staticRoutes];
}
