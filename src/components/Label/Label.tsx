import { TTextColors } from '../../types/theme';
import { css, useTheme } from '@emotion/react';
import { FC, PropsWithChildren } from 'react';

interface ILabel {
    Component?: 'p' | 'h1';
    fontWeight?: 'regular' | 'semi-bold' | 'bold';
    color: TTextColors;
}

const fontWeightMap = {
    regular: 400,
    'semi-bold': 500,
    bold: 700,
};

const staticLabelStyles = css`
    font-family: Rubik, sans-serif;
    font-optical-sizing: auto;
`;

export const Label: FC<PropsWithChildren<ILabel>> = ({
    Component = 'p',
    fontWeight = 'regular',
    color,
    children,
}) => {
    const theme = useTheme();

    return (
        <Component
            css={css`
                ${staticLabelStyles}
                color: ${theme.colors.text[color]};
                font-weight: ${fontWeightMap[fontWeight]};
            `}
        >
            {children}
        </Component>
    );
};
