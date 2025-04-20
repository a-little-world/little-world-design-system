import React from 'react';
import { Loading, LoadingSizes } from '@a-little-world/little-world-design-system';
import { transformComponent } from '../../utils/styledComponentsBridge';

// Transform the core Loading component to work with React Native
const NativeLoading = transformComponent(Loading);

// Re-export the transformed component and types
export { LoadingSizes };
export default NativeLoading; 