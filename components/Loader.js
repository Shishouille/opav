import React from 'react';
import LoaderRender from 'react-loader-spinner';

const Loader = () => (
  <div>
    <LoaderRender
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  </div>
);

export default Loader;
