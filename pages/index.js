import FigmaCard from "../components/Card/figmaCard";
import Projects from "../components/Card/projectsCard";

export default function HomePage() {
  return (
    <section className="full-container">
      <div className="flex flex-col-reverse sm:flex-row items-start space-y-5 mt-10">
        <div className="dark:text-white text-black text-2xl md:text-3xl text-highlight">
          <h1
            className="font-bold text-2xl md:text-3xl tracking-tight mb-1 text-black dark:text-white"
            translate="no"
          >
            Adem Can
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-base">
          <a className="text-gray-600 dark:text-gray-400 font-semibold">
            Front-end{" "}
          </a>{" "}
          developer
        </h1>
        <div className="text-lg leading-7 space-y-2 mt-4 text-gray-600 dark:text-gray-400 whitespace-normal">
          <p>
          I am a front-end developer from Turkey and I am making applications using some web technologies.
          </p>
          <p>
          In short, I play games on live broadcasts on the twitch platform, I am interested in the Crypto exchange, I do gaming news and review.
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <h1 className="font-bold text-xl md:text-2xl tracking-tight dark:text-white text-black mt-20">
          Featured Projects
        </h1>
      </div>
      <div>
        <div className="flex gap-6 flex-col md:flex-row">
          <Projects
            title="GitHub Finder"
            description="With Github Finder, it's easy to find programrs. Nextjs, TailwindCSS tech done using."
            href="https://www.figma.com/community/file/1142551475382280571"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <h1 className="font-bold text-xl md:text-2xl tracking-tight dark:text-white text-black mt-20">
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
