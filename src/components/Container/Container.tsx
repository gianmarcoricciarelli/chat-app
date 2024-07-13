import { FC, PropsWithChildren } from 'react';

interface IContainer {
    height?: string;
    width?: string;
    maxWidth?: string | number;
    display?: 'flex';
    flexDirection?: 'row' | 'column';
    flexGrow?: number;
    justifyContent?: 'flex-start' | 'center';
    alignItems?: 'flex-start' | 'center';
    alignContent?: 'flex-start' | 'center';
    gap?: string;
}

export const Container: FC<PropsWithChildren<IContainer>> = ({
    display,
    height,
    width,
    maxWidth,
    flexDirection = 'row',
    flexGrow,
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
    alignContent = 'flex-start',
    gap,
    children,
}) => {
    const isFlexContainer = display === 'flex';

    return (
        <div
            css={{
                height,
                width,
                display,
                maxWidth,
                flexDirection: isFlexContainer ? flexDirection : undefined,
                flexGrow: isFlexContainer && flexGrow ? flexGrow : undefined,
                justifyContent: isFlexContainer ? justifyContent : undefined,
                alignItems: isFlexContainer ? alignItems : undefined,
                alignContent: isFlexContainer ? alignContent : undefined,
                gap,
            }}
        >
            {children}
        </div>
    );
};
