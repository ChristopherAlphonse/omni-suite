import { BaseLayout, CenteredLayout } from '@/layout/index';

import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('HomePage');

    return (
        <BaseLayout>
            <CenteredLayout>
                <section>
                    <h1>{t('title')}</h1>
                </section>
            </CenteredLayout>
        </BaseLayout>
    );
}
