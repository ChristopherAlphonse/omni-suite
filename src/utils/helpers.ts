import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const isProdEnv = process.env.NODE_ENV !== 'development';
export const isDevelopEnv = process.env.NODE_ENV !== 'production';

const getBaseEnv = () => {
    if (isProdEnv && process.env.WEBAPP_URL) {
        return process.env.WEBAPP_URL;
    }

    const defaultPort = process.env.DEFAULT_PORT ?? '4000';

    return `http://localhost:${defaultPort}`;
};

export const baseUrl = getBaseEnv();

/**
 * Creates a complete URL safely by combining a base URL with a given path.
 *
 * @param {string} path - The relative path to append.
 * @param {string} [customBase] - Optional base URL to use instead of `baseUrl`.
 * @returns {string} The full URL.
 */
export function createCompleteUrl(path: string, customBase?: string): string {
    const resolvedBase = customBase ?? baseUrl;

    if (!resolvedBase) {
        console.error('⚠️ Error: No base URL found for createCompleteUrl.');

        return path;
    }

    try {
        return new URL(path, resolvedBase).toString();
    } catch (error) {
        console.error('🚨 Invalid URL generated:', { path, resolvedBase, error });

        return path;
    }
}

export function cn(...inputs: Array<ClassValue>) {
    return twMerge(clsx(inputs));
}
