import useSWR from "swr";
import React from "react";
import Tippy from "@tippyjs/react";

import Spotify from "../components/Spotify";
import TracksCard from "../components/Card/TopTracsCard/TracksCard";

const Games = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/steamactivite", fetcher);
  const { data: topTracks } = useSWR("/api/tracks", fetcher);
  const { data: artists } = useSWR("/api/artists", fetcher);

  return (
    <>
      <section className="mb-16 full-container">
        <div className="text-xl md:text-2xl tracking-tight dark:text-white text-black">
          <h1 className="font-bold">Activites</h1>
          <div className="mb-4 text-lg leading-7 space-y-2 mt-4 text-gray-600 dark:text-gray-400 whitespace-normal">
            <p>
              Here you can see my steam gaming activities and my spotify tracks.
            </p>
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
                  <Tippy
                    content={
                      <span className="font-medium tracking-tight">
                        Steam Status
                      </span>
                    }
                  >
                    <div>
                      <p className="text-xl">
                        <a
                          target="_blank"
                          href="https://steamcommunity.com/id/ademcancertel/"
                        >
                          {data?.steam.getPersonName
                            ? data?.steam.getPersonName
                            : "Loading ⏳"}
                        </a>
                      </p>
                    </div>
                  </Tippy>
                  <div className="xt-[#636366] dark:text-[#aeaeb2]">
                    {data?.steam.getGames === false ? (
                      <strong className="xt-[#636366] dark:text-[#aeaeb2]">
                        {data?.steam.getStatus
                          ? data?.steam.getStatus
                          : "error"}
                      </strong>
                    ) : (
                      <strong className="text-[#636366] dark:text-[#aeaeb2]">
                        {data?.steam.getGames} 🎮
                      </strong>
                    )}
                  </div>
                </p>
              </div>
            </div>
          </div>
          <hr className="pb-5 dark:opacity-10" />
          <div>
            <Spotify />
          </div>
        </div>
      </section>
      <div className="full-container">
        <div>
          <h1 className="font-bold text-xl md:text-2xl tracking-tight dark:text-white text-black">
            Top Tracks
          </h1>
          <div className="mt-4">
            <TracksCard />
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;
