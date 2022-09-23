import Image from "next/image";
import Tippy from "@tippyjs/react";

import MustafaKemalAtaturk from "../static/photos/MustafaKemalAtaturk.jpg";
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
            Adem Can Certel
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-base">
          <a className="text-gray-600 dark:text-gray-400 font-semibold">
            Front-end{" "}
          </a>{" "}
          developer • <span className="font-semibold text-gray-600 dark:text-gray-400">designer</span>
        </h1>
        <div className="text-lg leading-7 space-y-2 mt-4 text-gray-600 dark:text-gray-400 whitespace-normal">
          <p>
            Front-end developers in Turkey. I use some technologies to make web
            applications.
          </p>
          <p>
            Most of my time is spent reading books and playing storytelling
            games. I share short videos of games on my YouTube channel and a
            design user interface with Figma.
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
        <div className="flex">
          <a
            href="/repository"
            className="flex items-center text-gray-600 dark:text-gray-400 leading-7 rounded-md hover:text-gray-800 dark:hover:text-gray-200 transition-all"
          >
            More projects
          </a>
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
      <div className="max-w-screen-xl mx-auto px-6 mt-20">
        <Tippy
          placement="bottom"
          theme="light"
          content={
            <span className="font-medium tracking-tight">
              Mustafa Kemal Atatürk
            </span>
          }
        >
          <span className="box-border block overflow-hidden relative scale-125">
            <Image
              src={MustafaKemalAtaturk}
              priority
              quality={100}
              width={3609}
              height={2404}
              layout="responsive"
              className="rounded-lg shadow-xl objectFit"
            />
          </span>
        </Tippy>
      </div>
    </section>
  );
}
