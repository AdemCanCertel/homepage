import BooksCard from "../components/Card/booksCard";
export default function BooksPage() {
  return (
    <div className="full-container">
      <div className="space-y-5 mt-10">
        <div className="text-xl md:text-2xl tracking-tight dark:text-white text-black">
          <h1 className="font-bold">📖 Okuduğum kitaplar.</h1>
        </div>
        <div className="dark:text-white text-black">
          <p>Burada okuduğum kitapları ekliyorum.</p>
        </div>
      </div>
      <BooksCard />
    </div>
  );
}
