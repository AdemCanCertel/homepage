export default function figmaCard({ href, title }) {
  return (
    <a
      className="w-full"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="py-1 mt-2">
        <div className="flex flex-col sm:flex-row justify-between">
          <h1 className="w-full text-sm font-medium hover:underline underline-offset-4 text-black dark:text-gray-300/80">
            {title}
          </h1>
        </div>
      </div>
    </a>
  );
}
