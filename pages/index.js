import FigmaCard from "../components/Card/figmaCard";

export default function HomePage() {
  return (
    <section className="full-container">
      <div className="flex flex-col-reverse sm:flex-row items-start space-y-5 mt-10">
        <div className="dark:text-white text-black text-2xl md:text-3xl text-highlight">
          <h1
            className="font-bold text-zinc-900 dark:text-zinc-300 text-2xl md:text-3xl tracking-tight mb-1"
            translate="no"
          >
            Hi, I'm Adem Can
          </h1>
        </div>
      </div>
      <div>
        <div className="text-lg leading-7 space-y-2 text-zinc-900 dark:text-zinc-400">
          <p>
          Front-end Developer in Turkey. I do UI/UX designs and I do pixel designs with Aseprite application, I make objects with Blender 3D.
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <h1 className="font-bold text-zinc-900 dark:text-zinc-300 text-2xl md:text-3xl mt-16">
            Figma
          </h1>
        </div>
        <p className="mt-4 text-base text-zinc-900 dark:text-zinc-400">
          In my spare time, I do ui apps on the Figma and share it in the
          YouTube and Figma community.
        </p>
        <div className="mt-4">
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
          <FigmaCard
            href="https://www.youtube.com/watch?v=r55HIjY-vFs"
            title="Figma spring animation heart"
          />
        </div>
      </div>
    </section>
  );
}
