import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to MyExpoProject.web.ts
// and on native platforms to MyExpoProject.ts
import MyExpoProjectModule from './MyExpoProjectModule';
import MyExpoProjectView from './MyExpoProjectView';
import { ChangeEventPayload, MyExpoProjectViewProps } from './MyExpoProject.types';

// Get the native constant value.
export const PI = MyExpoProjectModule.PI;

export function hello(): string {
  return MyExpoProjectModule.hello();
}

export async function setValueAsync(value: string) {
  return await MyExpoProjectModule.setValueAsync(value);
}

const emitter = new EventEmitter(MyExpoProjectModule ?? NativeModulesProxy.MyExpoProject);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { MyExpoProjectView, MyExpoProjectViewProps, ChangeEventPayload };
