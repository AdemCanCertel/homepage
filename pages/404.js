import NextImage from "next/image";

import Error from "../static/photos/404.jpg";

export default function error() {
  return (
    <div className="full-container mt-20">
      <h1 className="font-bold text-xl md:text-2xl tracking-tight dark:text-white text-black">Unknown page...</h1>
      <p className="mt-2">
        You're off the site path. Go back to the{" "}
        <a className="dark:text-white text-black bg-gray-200 dark:bg-gray-800 p-1 sm:p-4 w-64 rounded" href="/">
          home
        </a>
      </p>
      <div className="mt-5 mb-3">
        <NextImage
          src={Error}
          quality={100}
          width={40}
          height={30}
          layout="responsive"
          className="rounded-md"
        />
      </div>
    </div>
  );
}
