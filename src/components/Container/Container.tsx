import { FC, PropsWithChildren } from 'react';

interface IContainer {
    height?: string;
    width?: string;
    display?: 'flex';
    flexDirection?: 'row' | 'column';
    flexGrow?: number;
    justifyContent?: 'flex-start' | 'center';
    alignItems?: 'flex-start' | 'center';
    alignContent?: 'flex-start' | 'center';
}

export const Container: FC<PropsWithChildren<IContainer>> = ({
    display,
    height,
    width,
    flexDirection = 'row',
    flexGrow,
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
    alignContent = 'flex-start',
    children,
}) => {
    const isFlexContainer = display === 'flex';

    return (
        <div
            css={{
                height,
                width,
                display,
                flexDirection: isFlexContainer ? flexDirection : undefined,
                flexGrow: isFlexContainer && flexGrow ? flexGrow : undefined,
                justifyContent: isFlexContainer ? justifyContent : undefined,
                alignItems: isFlexContainer ? alignItems : undefined,
                alignContent: isFlexContainer ? alignContent : undefined,
            }}
        >
            {children}
        </div>
    );
};
