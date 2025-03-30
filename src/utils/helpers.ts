import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const isProdEnv = process.env.NODE_ENV !== 'development';
export const isDevelopEnv = process.env.NODE_ENV !== 'production';

const getBaseEnv = () => {
    if (isProdEnv) {
        return process.env.WEBAPP_URL;
    }
    const defaultPort = isDevelopEnv ? (process.env.DEFAULT_PORT ?? '4000') : '';

    return `http://localhost:${defaultPort}`;
};

export const baseUrl = getBaseEnv();

/**
 * Creates a complete URL by combining the base URL with the provided path.
 * If a custom base is provided, it uses that to resolve the URL.
 *
 * @param {string} path - The relative path to append.
 * @param {string} [customBase] - Optional base URL to use instead of the default baseUrl.
 * @returns {string} The full URL.
 *
 * @example
 * // Using the default baseUrl:
 * const url1 = createCompleteUrl('/mini-app');
 * // Might output: "https://acme.com/mini-app"
 */
export function createCompleteUrl(path: string, customBase?: string): string {
    if (customBase) {
        return new URL(path, customBase).toString();
    }
    if (!path.startsWith('/')) {
        path = `/${path}`;
    }

    return `${baseUrl}${path}`;
}

export function cn(...inputs: Array<ClassValue>) {
    return twMerge(clsx(inputs));
}
