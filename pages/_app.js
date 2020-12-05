import "../styles/globals.css";
import "../styles/style.css";
import "../styles/mobile-nav.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
