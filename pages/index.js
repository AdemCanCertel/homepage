import FigmaCard from '../components/Card/figmaCard';
import Projects from '../components/Card/Projects';

export default function HomePage() {
    return (
    <section className='full-container'>
        <div className='flex flex-col-reverse sm:flex-row items-start space-y-5 mt-10'>
            <div className='dark:text-white text-black text-2xl md:text-3xl text-highlight'>
                    <h1 className='font-bold tracking-tight' translate='no'>Adem Can Certel</h1>
                    <h1 className='text-base font-semibold'>
                    <a className='text-green-600 dark:text-gray-400'>Front-end </a>
                    developer, designer
                    </h1>
                <div className="text-lg leading-7 space-y-2 mt-4 text-gray-600 dark:text-gray-400 text-opacity-100 whitespace-normal">
                    <p>Thirteen developers in Turkey. I use some technologies to make web applications.</p>
                    <p>Most of my time is spent reading books and playing storytelling games. I share short videos of games on my YouTube channel and a design user interface with Figma.</p> <a href='/social' className="text-zinc-500 dark:text-zinc-50 border-gray-400 hover:border-gray-500 border-b-2 border-opacity-20">Social</a>
                </div>
            </div>
        </div>
        <div className="mt-20 font-bold text-xl tracking-tight dark:text-neutral-400/40 text-gray-400">
            <h1>Featured Projects</h1>
        </div>
            <div className='flex gap-6 flex-col md:flex-row'>
             <Projects 
               href="https://www.figma.com/community/file/1142551475382280571"
               title="GitHub Finder"
               description="With Github Finder, it's easy to find programrs. Nextjs, TailwindCSS tech done using."
             />
            </div>
        <div>
            <h1 className='font-bold text-xl tracking-tight dark:text-neutral-400/40 text-gray-400 mt-10'>
                Figma
            </h1>
            <p className='mt-2 text-base text-gray-600 dark:text-gray-400'>
                In my spare time, I do ui apps on the Figma and share it in the YouTube and Figma community.
            </p>
            <FigmaCard
              href="https://www.figma.com/community/file/1142551475382280571"
              title="Food ordering application with Figma"
            />
            <FigmaCard
              href="https://www.figma.com/community/file/1145399036861031714"
              title="Vehicle hire application with Figma"
            />
            <FigmaCard
             href="https://www.figma.com/community/file/1146479270942120959"
             title="Course application with Figma"
            />
        </div>
</section>
    )
}