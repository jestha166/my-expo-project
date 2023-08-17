import * as React from 'react';

import { MyExpoProjectViewProps } from './MyExpoProject.types';

export default function MyExpoProjectView(props: MyExpoProjectViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
