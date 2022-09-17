import BooksCard from "../components/Card/booksCard";
export default function BooksPage() {
  return (
    <div className="full-container">
      <div className="space-y-5 mt-10">
        <div className="dark:text-white text-black text-2xl md:text-3xl text-highlight">
          <h1 className="font-semibold">📖 Okuduğum kitaplar.</h1>
        </div>
        <div className="dark:text-white text-black">
          <p>Burada okuduğum kitapları ekliyorum.</p>
        </div>
      </div>
      <BooksCard />
    </div>
  );
}
