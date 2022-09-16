import { projects } from "../Data/projectsData"

export default function Projects() {
    return (
      <div className="mt-4 flex space-x-4" id="projects">
        {projects.map(({ id, title, description, source }) => (
          <div id={id} className="p-4 rounded overflow-x-hidden transition-colors hover:bg-gray-400/10 dark:hover-bg-neutral-800/40 space-x-2">
            <a href={source} target="_blank">
              <div className="overflow-x-hidden">
                <h2 className="font-medium text-black dark:text-white">{title}</h2>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{description}</p>
              </div> 
            </a>
          </div>
            ))}
      </div>
    )
  }