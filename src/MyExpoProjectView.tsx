import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { MyExpoProjectViewProps } from './MyExpoProject.types';

const NativeView: React.ComponentType<MyExpoProjectViewProps> =
  requireNativeViewManager('MyExpoProject');

export default function MyExpoProjectView(props: MyExpoProjectViewProps) {
  return <NativeView {...props} />;
}
