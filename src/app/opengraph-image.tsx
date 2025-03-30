import { ImageResponse } from 'next/og';

import { createCompleteUrl } from '../utils/helpers';

export const runtime = 'edge';

export default async function Image() {
    const logoSrc = await fetch(createCompleteUrl('/opengraph-image.webp', import.meta.url)).then((res) =>
        res.arrayBuffer()
    );

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <img src={`data:image/png;base64,${Buffer.from(logoSrc).toString('base64')}`} height='100' alt='Logo' />
            </div>
        )
    );
}
