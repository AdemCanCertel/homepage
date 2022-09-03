import BooksCard from '../components/BooksCard'

export default function BooksPage() {      
    return (
    <div className='full-container'>
        <section className='css-memoji'>
            <div className='space-y-5 mt-10'>
                <div className='dark:text-white text-black text-2xl md:text-3xl text-highlight'>
                    <h1 className='font-bold'>📖 Okuduğum kitaplar.</h1>
                </div>
                <div className="dark:text-white text-black">
                    <p>Burada okuduğum kitapları ekliyorum.</p>
                </div>
            </div>
        </section>
        <BooksCard/>
    </div>
    )
}