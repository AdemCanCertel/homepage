import repositoryData from "../components/Data/repositoryData";
import Repository from "../components/Card/repositoryCard";

export default function RepositoryPage() {
  return (
    <div className="full-container">
      <div>
        <h1 className="font-bold text-xl md:text-2xl tracking-tight dark:text-neutral-400 text-neutral-500">
          Repository
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {repositoryData.map((D) => (
          <Repository
            title={D.title}
            description={D.description}
            lang={D.lang}
            href={D.href}
          />
        ))}
      </div>
    </div>
  );
}
