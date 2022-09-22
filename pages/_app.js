import "../static/styles/global.css";
import "tippy.js/dist/tippy.css"; // optional
import 'tippy.js/themes/light.css';
import "@upstash/claps/style.css";
import "remixicon/fonts/remixicon.css";

import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "nextjs-google-analytics";

import Layout from "../components/Layout";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
        <Layout>
          <GoogleAnalytics />
          <Component {...pageProps} />
          <Footer />
        </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
