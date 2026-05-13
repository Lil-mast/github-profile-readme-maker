import "../styles/globals.css";
import "../styles/animation.css";
import "../styles/scrollbar.css";
import "../styles/markdown.css";
import "../styles/toastvg.css";
import { useEffect } from "react";
import { GPRMProvider } from "../components/mobx/GPRMcontext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // #region agent log
    fetch("http://127.0.0.1:7844/ingest/c0c3200f-3ad4-4d87-bcaf-c543b6b56338", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "1cfdb8",
      },
      body: JSON.stringify({
        sessionId: "1cfdb8",
        runId: "pre-fix",
        hypothesisId: "H4",
        location: "pages/_app.js:10",
        message: "App shell mounted",
        data: { componentName: Component?.name || "anonymous" },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, [Component]);

  return (
    <GPRMProvider>
      <Component {...pageProps} />
    </GPRMProvider>
  );
}

export default MyApp;
