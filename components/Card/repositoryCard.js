const Repository = ({ title, description, href, lang }) => (
        <a href={href} target="_blank">
            <div className="rounded flex flex-col h-full w-full transition-colors justify-between hover:bg-gray-400/10 dark:hover-bg-neutral-800/40 p-4">
                <div className="space-y-2">
                    <div className="flex-2 justify-between space-x-2 text-black dark:text-white">
                        <h1> {title} </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                        { description }
                    </p>
                </div>
                <div className="mt-5">
                    <div className="flex justify-between">
                        {lang}
                    </div>
                </div>
            </div>
        </a>
)

export default Repository