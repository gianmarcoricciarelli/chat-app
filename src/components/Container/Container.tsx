import { FC, PropsWithChildren } from 'react';

interface IContainer {
    height?: string;
    width?: string;
    display?: 'flex';
    justifyContent?: 'flex-start' | 'center';
    alignContent?: 'flex-start' | 'center';
}

export const Container: FC<PropsWithChildren<IContainer>> = ({
    display,
    height,
    width,
    justifyContent = 'flex-start',
    alignContent = 'flex-start',
    children,
}) => {
    return (
        <div
            css={{
                height,
                width,
                display,
                justifyContent: display === 'flex' ? justifyContent : undefined,
                alignContent: display === 'flex' ? alignContent : undefined,
            }}
        >
            {children}
        </div>
    );
};
