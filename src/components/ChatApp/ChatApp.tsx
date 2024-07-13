import { Label } from '../../Label/Label';
import { useTheme } from '@emotion/react';
import { FC } from 'react';

export const ChatApp: FC = () => {
    const { colors } = useTheme();

    return (
        <div
            css={{
                backgroundColor: colors.secondary.white,
                height: '100dvh',
                width: '100dvw',
            }}
        >
            <Label />
        </div>
    );
};
