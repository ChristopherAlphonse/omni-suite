import { routing } from './routing';
import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

    try {
        return {
            locale,
            messages: (await import(`../../content/${locale}.json`)).default
        };
    } catch (error) {
        console.error(`Failed to load messages for locale "${locale}":`, error);
        if (locale !== routing.defaultLocale) {
            try {
                return {
                    locale: routing.defaultLocale,
                    messages: (await import(`../../content/${routing.defaultLocale}.json`)).default
                };
            } catch (fallbackError) {
                console.error(`Failed to load default locale "${routing.defaultLocale}":`, fallbackError);
                throw new Error(
                    `Failed to load messages for both requested locale "${locale}" and default locale "${routing.defaultLocale}"`
                );
            }
        }
        throw new Error(
            `Failed to load messages for locale "${locale}": ${error instanceof Error ? error.message : String(error)}`
        );
    }
});
