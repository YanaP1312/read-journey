import {Triangle} from 'react-loader-spinner'

const Loader = () => {
  return <div className='loader'><Triangle visible={true}
  height="80"
  width="80"
  color="#4F92F7"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""/></div>;
};

export default Loader;
