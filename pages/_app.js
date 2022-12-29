import "../static/styles/global.css";
import "tippy.js/dist/tippy.css"; // optional
import 'tippy.js/themes/light.css';
import "remixicon/fonts/remixicon.css";

import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "nextjs-google-analytics";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
        <Layout>
          <GoogleAnalytics />
          <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
