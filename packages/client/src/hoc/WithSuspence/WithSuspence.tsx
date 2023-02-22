import { ComponentType, Suspense } from 'react';
import Spinner from 'src/components/Spinner';

function WithSuspense<P extends object>(WrappedComponent: ComponentType<P>) {
  const ComponentWithSuspense = (props: P) => (
    <Suspense fallback={<Spinner />}>
      <WrappedComponent {...props} />
    </Suspense>
  );

  return ComponentWithSuspense;
}

export default WithSuspense;
