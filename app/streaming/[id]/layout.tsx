import { Boundary } from '@/ui/boundary';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Boundary labels={['제품']} size='small' animateRerendering={false}>
        {children}
      </Boundary>
    </>
  );
}
