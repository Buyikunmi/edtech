import "tailwindcss/tailwind.css";
import Header from "../components/header";
import SideBar from "../components/sidebar";
import "../public/assets/css/icons.css";
import "../public/assets/css/style.css";
import "../public/assets/css/uikit.css";

import NextProgress from "next-nprogress";
// // import jquery from "../public/assets/js/jquery-3.6.0.min.js";
// import "../public/assets/js/uikit.js";
// import "../public/assets/js/tippy.all.min.js";
// import "../public/assets/js/simplebar.js";
// import "../public/assets/js/custom.js";
// // import "../public/assets/js/bootstrap-select.min.js";
// import "../public/assets/js/ionicons.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextProgress />
      <div id="wrapper" className="is-verticle">
        <Header />
        <div className="main_content">
          <Component {...pageProps} />
          <SideBar />
        </div>
      </div>
    </>
  );
}

export default MyApp;
