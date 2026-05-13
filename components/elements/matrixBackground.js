import React, { useEffect } from "react";

export default function MatrixBackground() {
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
        runId: "post-fix",
        hypothesisId: "H1",
        location: "components/elements/matrixBackground.js:4",
        message: "MatrixBackground mounted",
        data: { status: "resolved-module" },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-b from-yellow-950/40 via-zinc-900 to-zinc-950" />
  );
}
