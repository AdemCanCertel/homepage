import Link from "next/link"

export default function Footer() {
    return (
        <footer className="full-container flex flex-col justify-center items-start mx-auto w-full mb-8 mt-52">
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
            <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:gird-cols-3">
                <div className="flex flex-col space-y-4">
                    <Link href="/activites">
                        <a className="text-gray-500 hover:text-gray-600">Activite</a>
                    </Link>
                    <Link href="/books">
                        <a className="text-gray-500 hover:text-gray-600">Books</a>
                    </Link>
                    <Link href="/photos">
                        <a className="text-gray-500 hover:text-gray-600">Photos</a>
                    </Link>
                    <Link href="/repository">
                        <a className="text-gray-500 hover:text-gray-600">Repository</a>
                    </Link>
                    <Link href="/social">
                        <a className="text-gray-500 hover:text-gray-600">Social</a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}