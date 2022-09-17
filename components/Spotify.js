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
                            {<span className='font-medium tracking-tight'>Spotify Status</span>}
                          >
                          <p className='text-xl leading-7 dark:text-white text-black'>
                            <a target="_blank" href='https://open.spotify.com/user/313pix6aha7kwostg2kwtujcjesu'>
                              {data?.isPlaying ? data.artist : 'Spotify'}
                            </a>
                          </p>
                        </Tippy>
                            <strong className='text-[#636366] dark:text-[#aeaeb2]'>
                                {data?.isPlaying ? data.title : 'Not Listening'}
                            </strong>
                        </div>
                    </a>
            </section>
        </div>
    );
}