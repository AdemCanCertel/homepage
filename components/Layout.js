import Head from "next/head"
import Header from "./Header"
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="shortcut icon" href="../static/photos/favicon.png"/>
        <script type="text/javascript" src="/static/script.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      </Head>
      <div className="flex flex-col">
      <Header />
      <DefaultSeo {...SEO} />
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout