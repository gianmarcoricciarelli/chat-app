import '@emotion/react';

export type TTextColors =
    | 'paleViolet'
    | 'moderateViolet'
    | 'desaturatedDarkViolet'
    | 'grayishBlue'
    | 'veryDarkDesaturatedViolet'
    | 'darkGrayishViolet';
type TGradientColors = 'lightMagenta' | 'lightViolet';
type TSecondaryColors =
    | 'white'
    | 'lightGrayishViolet'
    | 'veryDarkDesaturatedViolet'
    | 'veryLightMagenta';
type THslDefinition = `hsl(${number}, ${number}%, ${number}%)`;

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            text: Record<TTextColors, THslDefinition>;
            gradients: Record<TGradientColors, THslDefinition>;
            secondary: Record<TSecondaryColors, THslDefinition>;
        };
    }
}
