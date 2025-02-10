/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import React from 'react';

const CatImages = async () => {
  const data = await fetch(
    'https://api.thecatapi.com/v1/images/search?limit=10'
  );
  const cats = await data.json();

  return (
    <div className='grid grid-cols-2 gap-4 justify-center w-[450px]'>
      {cats.map((cat: any) => (
        <div
          key={cat.id}
          className='w-[200px] h-[200px] overflow-hidden rounded-lg'>
          <Image
            key={cat.id}
            src={cat.url}
            alt={cat.id}
            className='object-cover w-full h-full'
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};

export default CatImages;
