import { FC } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { usePromiseTracker } from 'react-promise-tracker';

interface ILoaderProps {
  area?: string;
  children?: React.ReactNode;
  width?: string;
}

export const Loader: FC<ILoaderProps> = (props) => {
  const { area, children, width } = props;
  const { promiseInProgress } = usePromiseTracker({ area });

  if (!promiseInProgress) {
    return <>{children}</>;
  }
  return (
    <RotatingLines
      strokeColor="black"
      strokeWidth="2"
      animationDuration="0.75"
      width={width || '50'}
      visible={true}
    />
  );
};
