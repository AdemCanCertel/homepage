import "../static/styles/global.css";
import "tippy.js/dist/tippy.css"; // optional
import "@upstash/claps/style.css";
import "remixicon/fonts/remixicon.css";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import CommandBar from "../components/CommandBar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <CommandBar>
        <Layout>
          <GoogleAnalytics />
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </CommandBar>
    </ThemeProvider>
  );
}

export default MyApp;
