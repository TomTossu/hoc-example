'use client';
import Image from 'next/image';
import withLoader from './withLoader';

const CatImagesHOC = ({ data }: { data: { id: string; url: string }[] }) => {
  return (
    <div className='grid grid-cols-2 gap-4 justify-center w-[450px]'>
      {data.map((cat) => (
        <div
          key={cat.id}
          className='w-[200px] h-[200px] overflow-hidden rounded-lg'>
          <Image
            src={cat.url}
            alt='Cat'
            className='object-cover w-full h-full'
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};

const EnhancedCatImagesHOC = withLoader(
  CatImagesHOC,
  'https://api.thecatapi.com/v1/images/search?limit=10'
);

export default EnhancedCatImagesHOC;
