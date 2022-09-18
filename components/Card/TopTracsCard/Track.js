export default function Track({ title, artist, id }) {
  return (
    <div className="space-y-3 line-clamp-3 md:line-clamp-none mb-4">
      <div className="text-gray-500 transform origin-center font-inter tracking-wider hidden xs:inline-flex">
        #{id + 1}
      </div>
      <div>
        <h2 className="font-medium text-gray-900 dark:text-gray-100">{title}</h2>
        <strong className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full">{artist}</strong>
      </div>
      <hr className="w-56 opacity-5" />
    </div>
  );
}
