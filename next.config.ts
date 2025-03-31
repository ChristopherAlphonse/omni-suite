import withBundleAnalyzer from '@next/bundle-analyzer';

import createNextIntlPlugin from 'next-intl/plugin';
import process from 'process';

/**
 * @type {import('next').NextConfig}
 **/
export default () => {
    const withNextIntl = createNextIntlPlugin();
    const plugins = [withNextIntl];

    if (process.env.ANALYZE === 'true') {
        // @ts-ignore
        plugins.push(withBundleAnalyzer({ enabled: true }));
    }

    return plugins.reduce((acc: import('next').NextConfig, next) => next(acc), {
        reactStrictMode: true,
        pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
        eslint: { ignoreDuringBuilds: true, dirs: ['app', 'components', 'layouts'] },
        typescript: {
            ignoreBuildErrors: true
        },

        images: {
            minimumCacheTTL: 31536000,
            remotePatterns: [
                {
                    protocol: 'https',
                    // most likely to use for storing images
                    hostname: 'res.cloudinary.com'
                }
            ]
        },

        // @ts-ignore
        webpack: (config) => {
            config.module.rules.push({
                test: /\.svg$/,
                use: ['@svgr/webpack']
            });

            return config;
        }
    });
};
