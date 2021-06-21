import "@styles/globals.css";
import "@styles/css/nucleo-icons.css";
import "@styles/scss/blk-design-system-react.scss?v=1.2.0";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default Application;
