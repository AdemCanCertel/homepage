import BooksCard from "../components/Card/booksCard";

export default function BooksPage() {
  return (
    <div className="full-container">
      <div className="space-y-5 mt-10">
        <div className="text-xl md:text-2xl tracking-tight dark:text-white text-black">
          <h1 className="font-bold">Okuduğum kitaplar.</h1>
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          <p>Okumay başladığım/Okuduğum kitaplar burada yer alıyor.</p>
        </div>
      </div>
      <BooksCard />
    </div>
  );
}
