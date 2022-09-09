import { projects } from "../contants/contants"

export default function Projects() {
    return (
      <div className="mt-4 w-full flex space-x-4" id="projects">
        {projects.map(({ id, title, description, source }) => (
          <div id={id} className="p-4 rounded overflow-x-hidden transition-colors hover:bg-gray-400/10 dark:hover-bg-neutral-800/40 space-x-2">
            <a href={source} target="_blank">
              <div className="overflow-x-hidden">
                <h2 className="font-medium text-gray-600 dark:text-gray-100">{title}</h2>
                <p className="text-neutral-500 line-clamp-2">{description}</p>
              </div> 
            </a>
          </div>
            ))}
      </div>
    )
  }