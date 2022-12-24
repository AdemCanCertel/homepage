import FigmaCard from "../components/Card/figmaCard";
import Projects from "../components/Card/projectsCard";

export default function HomePage() {
  return (
    <section className="full-container">
      <div className="flex flex-col-reverse sm:flex-row items-start space-y-5 mt-10">
        <div className="dark:text-white text-black text-2xl md:text-3xl text-highlight">
          <h1
            className="font-semibold text-2xl md:text-3xl tracking-tight mb-1 text-black dark:text-white"
            translate="no"
          >
            Adem Can
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-base">
          <a className="text-neutral-700 dark:text-neutral-200 font-semibold">
            Front-end developer
          </a>
        </h1>
        <div className="text-lg leading-7 space-y-2 text-gray-600 dark:text-gray-400 whitespace-normal mt-4">
          <p>
          I am a front-end developer from Turkey and I am making applications using some web technologies.
          Some technologies that I use as a favorite <a href="https://nextjs.org/?utm_source=ademcancertel.vercel.app" className="underline underline-offset-4">Next.js</a>, <a href="https://vuejs.org/?utm_source=ademcancertel.vercel.app" className="underline underline-offset-4">Vue.js</a>
          </p>
        </div>
      </div>
      <section className="items-center">
        <h1 className="font-semibold text-xl md:text-2xl text-neutral-700 dark:text-neutral-200 mt-16">
          Featured Projects
        </h1>
        <div className="grid gap-4 md:grid-cols-1 mt-4">
          <Projects
            title="GitHub Finder"
            description="With Github Finder, it's easy to find programrs. Nextjs, TailwindCSS tech done using."
            href="https://www.figma.com/community/file/1142551475382280571"
          />
        </div>
      </section>
      <div>
        <div className="flex items-center">
          <h1 className="font-semibold text-semibold md:text-2xl text-neutral-700 dark:text-neutral-200 text-black mt-16">
            Figma
          </h1>
        </div>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
          In my spare time, I do ui apps on the Figma and share it in the
          YouTube and Figma community.
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
  );
}
