import { NextSeo } from 'next-seo';
import useSWR from 'swr';
import Tippy from '@tippyjs/react';
import { SiSpotify } from 'react-icons/si';

export default function Home() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data } = useSWR('/api/spotify', fetcher);
    return (
        <div>
            <NextSeo />
            <section className='full-container'>
                  <a
                   target='_blank'
                   rel='noopener noreferer'
                   className="relative flex items-center pb-5 space-x-4 rounded-md"
                  >
                    <div className='w-16'>
                      {data?.isPlaying ? (
                        <img
                         className='w-16 rounded-md'
                         src={data?.albumImageUrl}
                         alt={data?.album}
                        />
                          ) : (
                             <SiSpotify size={60} color={'#1ED760'} />
                          )}
                      </div>
                        <div className='select-none'>
                        <Tippy content=
                            {<span className='font-bold tracking-tight'>Spotify Status</span>}
                          >
                          <p className='text-xl leading-7 dark:text-white text-black'>
                            {data?.isPlaying ? data.artist : 'Spotify'}
                          </p>
                        </Tippy>
                            <p className='text-gray-700 dark:text-gray-300'>
                                {data?.isPlaying ? data.title : 'Not Listening'}
                            </p>
                        </div>
                    </a>
            </section>
        </div>
    );
}