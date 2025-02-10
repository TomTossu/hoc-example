/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';

function withLoader<P extends { data: any }>(
  WrappedComponent: React.ComponentType<P>,
  url: string
) {
  return function ComponentWithData(props: Omit<P, 'data'>) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url);
          const fetchedData = await res.json();

          setTimeout(() => {
            setData(fetchedData);
            setLoading(false);
          }, 2000);
        } catch (err) {
          setError(`Error fetching data: ${err}`);
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    if (loading)
      return (
        <div className='flex justify-center items-center h-[200px] w-[450px]'>
          <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white-900'></div>
        </div>
      );
    if (error) return <p>{error}</p>;

    return <WrappedComponent {...(props as P)} data={data} />;
  };
}

export default withLoader;
