import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            text: {
                paleViolet: string;
                moderateViolet: string;
                desaturatedDarkViolet: string;
                grayishBlue: string;
                veryDarkDesaturatedViolet: string;
                darkGrayishViolet: string;
            };
            gradients: {
                lightMagenta: string;
                lightViolet: string;
            };
            secondary: {
                white: string;
                lightGrayishViolet: string;
                veryDarkDesaturatedViolet: string;
                veryLightMagenta: string;
            };
        };
    }
}
