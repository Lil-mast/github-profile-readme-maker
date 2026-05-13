import Head from "next/head";
import Footer from "../components/elements/Footer";
import MatrixBackground from "../components/elements/matrixBackground";
import NavBar from "../components/NavBar";
import HomePage from "../components/slides/HomePage";

export default function Home() {
  const debugIngestUrl = process.env.NEXT_PUBLIC_DEBUG_INGEST_URL;

  // #region agent log
  if (typeof window !== "undefined" && debugIngestUrl) {
    fetch(debugIngestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "1cfdb8",
      },
      body: JSON.stringify({
        sessionId: "1cfdb8",
        runId: "pre-fix",
        hypothesisId: "H5",
        location: "pages/index.js:8",
        message: "Home page function executed",
        data: {},
        timestamp: Date.now(),
      }),
    }).catch((error) => {
      if (process.env.NODE_ENV !== "production") {
        console.warn("Failed to send debug ingest log:", error);
      }
    });
  }
  // #endregion

  return (
    <>
      <Head>
        <title>Salamander Tech Hub : BPG</title>
        <meta
          name="title"
          content="Salamander Tech Hub : BPG"
        />
        <meta
          name="description"
          content="Best Profile Generator by Salamander Tech Hub. Create your perfect GitHub Profile README with powerful customization."
        />
        <meta name="copyright" content="Salamander Tech Hub" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://github.com/Salamander-Tech-Hub/"
        />
        <meta
          property="og:title"
          content="Salamander Tech Hub : BPG"
        />
        <meta
          property="og:description"
          content="Best Profile Generator by Salamander Tech Hub. Create your perfect GitHub Profile README with powerful customization."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/143979634?v=4"
        />
        <meta property="x:card" content="summary_large_image" />
        <meta property="x:url" content="https://github.com/Salamander-Tech-Hub/" />
        <meta
          property="x:title"
          content="Salamander Tech Hub : BPG"
        />
        <meta
          property="x:description"
          content="Best Profile Generator by Salamander Tech Hub. Create your perfect GitHub Profile README with powerful customization."
        />
        <meta
          property="x:image"
          content="https://avatars.githubusercontent.com/u/143979634?v=4"
        />
        <link rel="icon" href="/salamanderlogo.jpeg" />
      </Head>
      <div className="relative min-h-screen overflow-hidden">
        <MatrixBackground />
        <div className="relative z-10 overflow-x-hidden max-w-[100vw] p-3 md:p-4 text-yellow-100">
          <NavBar />
          <HomePage />
          <Footer />
        </div>
      </div>
    </>
  );
}