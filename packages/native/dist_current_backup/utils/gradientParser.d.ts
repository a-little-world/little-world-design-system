type GradientInfo = {
    colors: readonly [string, string, ...string[]];
    start: {
        x: number;
        y: number;
    };
    end: {
        x: number;
        y: number;
    };
};
export declare const parseGradientString: (gradientString: string) => GradientInfo;
export {};
