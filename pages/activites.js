import useSWR from "swr";
import React from "react";
import Tippy from "@tippyjs/react";

const Games = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/steamactivite", fetcher);
  return (
    <>
      <section className="mb-16 full-container">
          <h1 className="font-semibold text-xl md:text-2xl text-neutral-700 dark:text-neutral-200">Activites</h1>
          <div className="text-base text-gray-600 dark:text-gray-400">
            <p>
              Here you can see my steam gaming activities.
            </p>
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
        </div>
      </section>
    </>
  );
};

export default Games;
