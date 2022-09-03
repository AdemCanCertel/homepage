import useSWR from 'swr';
import React from 'react';
import Spotify from '../components/Spotify'
import Tippy from '@tippyjs/react';

const Games = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data } = useSWR('/api/steamactivite', fetcher);
    return (
      <section className="mb-16 full-container">
        <div className='dark:text-white text-black text-2xl md:text-3xl text-highlight'>
          <h1 className='font-bold'>Activites</h1>
        <div className='mb-4 text-lg text-gray-600 dark:text-gray-400'>
          <p>Here you can see my steam gaming activities and my spotify tracks.</p>
        </div>
      </div>
    <div className="mt-10 rounded-lg items-center border border-black dark:border-white dark:border-opacity-10 border-opacity-10"> 
      <div className="flex py-6 my-auto rounded-md">
        <div className="flex my-auto ml-6 mr-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-md">
            {data?.steam.getAvatar ? (
          <img
            className="rounded-md"
            src={data?.steam.getAvatar}
            width={100}
            height={100}
          />
          ) : (
        <div></div>
            )}
        </div>
      <div className="my-auto ml-3 select-none">
        <p className="dark:text-white text-black">
          <Tippy content={<span className='font-medium tracking-tight'>Steam Status</span>}>
            <p className='text-xl'>
              {data?.steam.getPersonName ? data?.steam.getPersonName : "%"}
            </p>
          </Tippy>
          <div className="text-gray-700 dark:text-gray-300">
            {data?.steam.getGames === false ? (
              <strong className='text-gray-700 dark:text-gray-300'>
                {data?.steam.getStatus ? data?.steam.getStatus : "-"}
              </strong>
                ) : (
              <strong className="text-neutral-700 dark:text-neutral-200">
                {data?.steam.getGames}
              </strong>
            )}
          </div>
        </p>
      </div>
    </div>
  </div>
  <hr className='pb-5 dark:opacity-10'/>
<div>
  <Spotify/>
</div>
  </div>
    </section>
    )   
};

export default Games;
