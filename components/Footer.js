import Link from "next/link"

export default function Footer() {
    return (
        <footer className="full-container flex flex-col justify-center items-start mx-auto w-full mb-8 mt-44">
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
            <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:gird-cols-3">
                <div className="flex flex-col space-y-4">
                    <Link href="/activites">
                        <a className="">Activites</a>
                    </Link>
                    <Link href="/books">
                        <a className="">Books</a>
                    </Link>
                    <Link href="/photos">
                        <a className="">Photos</a>
                    </Link>
                    <Link href="/repository">
                        <a className="">Repository</a>
                    </Link>
                    <Link href="/social">
                        <a className="">Social</a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}