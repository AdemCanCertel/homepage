import Head from "next/head"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Adem Can Certel hompage"/>
        <meta name="Author" content="Adem Can Certel"/>
        <meta name="twitter:title" content="Adem Can Certel"/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ademcancertell" />
        <title>Adem Can Certel</title>
        <link rel="shortcut icon" href="https://pbs.twimg.com/profile_images/1559300390977507330/Bq5EzTJv_400x400.jpg" type="image/x-icon"/>
      </Head>
      <div className="flex flex-col">
      <Header />
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout