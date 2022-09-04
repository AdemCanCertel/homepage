import useSWR from 'swr';
import React from 'react';


import Track from "./Track";
import fetcher from "../../lib/fetcher";

export default function() {
    const { data: topTracks } = useSWR("/api/tracks", fetcher);

    return (
        <div>
            {topTracks?.map((track, index) => (
              <Track
                key={index}
                id={index}
                track={track}
                url={track.url}
                title={track.title}
                artist={track.artist}
              />
            ))}
        </div>
    )
}