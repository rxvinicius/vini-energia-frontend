import { loaderIcon } from '@/assets/icons';

type LoaderProps = {
  size?: 'small' | 'medium';
};

const getSize = {
  small: 20,
  medium: 40,
};

const Loader = ({ size = 'medium' }: LoaderProps) => (
  <div className="flex-center w-full">
    <img
      src={loaderIcon}
      alt="loader"
      width={getSize[size]}
      height={getSize[size]}
    />
  </div>
);

export default Loader;
