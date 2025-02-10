/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import CatImages from './components/CatImages';
import EnhancedCatImagesHOC from './components/CatImagesHOC';

const Home = () => {
  return (
    <div className='flex gap-[200px] justify-center items-center'>
      <CatImages />
      <EnhancedCatImagesHOC />
    </div>
  );
};

export default Home;
