import type { FC, PropsWithChildren } from 'react';

import { cn } from '@/utils/helpers';

interface CenteredLayoutProps extends PropsWithChildren {
    className?: string;
}

const CenteredLayout: FC<CenteredLayoutProps> = ({ children, className }) => (
    <div className={cn('flex flex-col items-center justify-center text-center', className)}>{children}</div>
);

export default CenteredLayout;
