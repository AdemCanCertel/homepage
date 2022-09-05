export default function Work() {
    return (
        <div className="mt-20">
            <div className="font-bold text-xl tracking-tight dark:text-white text-black">
                <h1>Featured Projects</h1>
            </div>
            <div className="mt-4 flex gap-6 flex-col md:flex-row">
              <a href="https://github.com/AdemCanCertel/github-finder" target="_blank" className="w-full md:w-1/3 p-[3px] hover:scale-[1.01] transition-all rounded-md bg-gradient-to-r from-gray-500 to-gray-600">
                <div className="bg-white dark:bg-background_color text-white rounded-md">
                    <h4 className="mb-6 p-2 sm:mb-10 w-full text-lg md:text-lg text-gray-900 dark:text-gray-100 font-medium">GitHub Finder</h4>
                    <div className="p-2 dark:text-white text-black">
                      <p>With Github Finder, it's easy to find programrs. Nextjs, TailwindCSS tech done using.</p>
                    </div>
                </div>
              </a>
              <a href="https://github.com/AdemCanCertel/homepage" target="_blank" className="w-full md:w-1/3 p-[3px] hover:scale-[1.01] transition-all rounded-md bg-gradient-to-r from-gray-500 to-gray-600">
                <div className="bg-white dark:bg-background_color text-white rounded-md">
                    <h4 className="mb-6 p-2 sm:mb-10 w-full text-lg md:text-lg text-gray-900 dark:text-gray-100 font-medium">Homepage</h4>
                    <div className="p-2 dark:text-white text-black">
                      <p>Source code my personal website. Next.js is written with TailwindCSS.</p>
                    </div>
                </div>
              </a>
            </div>
        </div>
    )
  }