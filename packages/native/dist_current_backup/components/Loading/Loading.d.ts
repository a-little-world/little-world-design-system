import React from 'react';
import { LoadingBaseProps, LoadingSizes } from '@a-little-world/little-world-design-system-core';
export { LoadingSizes };
export declare const LOADING_RING_ID = "loadingRing";
interface LoadingProps extends LoadingBaseProps {
    style?: any;
}
declare const Loading: React.FC<LoadingProps>;
export default Loading;
