import repositoryData from "../components/Data/repositoryData";
import Repository from "../components/Card/repositoryCard";

export default function RepositoryPage() {
  return (
    <div className="full-container">
      <div>
        <h1 className="font-semibold dark:text-white text-black text-2xl md:text-3xl text-highlight">
          Repository
        </h1>
        <div>
          <p>My open source projects in Github</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 mt-10">
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
