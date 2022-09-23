export default function Track({ url, title, artist, coverImage, id }) {
  return (
    <a href={url} target="_blank">
      <div className="space-y-3 line-clamp-3 md:line-clamp-none">
        <div className="text-gray-500 transform origin-center font-inter tracking-wider hidden xs:inline-flex">
          #{id + 1}
        </div>
        <div className="relative w-12 h-12 transform origin-center">
          <img
            src={coverImage}
            className="rounded"
            width={50}
            height={50}
            layout="fixed"
            alt={title}
            quality={50}
          />
        </div>
        <div>
          <h2 className="font-medium text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 w-60 sm:w-96 md:w-full">
            {artist}
          </p>
        </div>
        <hr className="w-56 opacity-5" />
      </div>
    </a>
  );
}
