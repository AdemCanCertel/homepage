export default function Footer() {
    return (
        <footer className="mt-40 full-container pb-5">
            <div className="flex space-x-10">
                <p>You can access the website codes via <a href='https://github.com/AdemCanCertel' target="_blank" className="text-zinc-500 dark:text-zinc-50 decoration-2 underline underline-offset-2">GitHub</a></p>
              <div className="space-y-4">
                <ul>
                    <li>
                       <a href="/activites">Activites</a>
                    </li>
                    <hr/>
                    <li>
                       <a href="/books">Books</a>
                    </li>
                    <hr/>
                    <hr/>
                    <li>
                        <a href="" className="cursor-pointer">Snippest</a>
                    </li>
                </ul>
              </div>
            </div>
        </footer>
    )
}