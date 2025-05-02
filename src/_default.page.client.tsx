import { StrictMode } from "react";
import { Root, createRoot, hydrateRoot } from "react-dom/client";
import "./global.css";
import { PageContext } from "./types";
import { HelmetProvider } from "react-helmet-async";
import { Template } from "./Template";
import { init, browserTracingIntegration } from "@sentry/react";

init({
  dsn: "https://dac336891ee1dc3fc2bc17a477b4402e@o4509252342775808.ingest.us.sentry.io/4509252348870656",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations: [browserTracingIntegration()],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  // tracePropagationTargets: [
  //   "localhost",
  //   /https:\/\/computost\.com\//,
  //   /https:\/\/www\.computost\.com\//,
  // ],
});

export const clientRouting = true;

let root: Root;
export const render = ({ isHydration, Page, pageProps }: PageContext) => {
  const container = document.getElementById("root")!;
  const page = (
    <StrictMode>
      <HelmetProvider>
        <Template>
          <Page {...pageProps} />
        </Template>
      </HelmetProvider>
    </StrictMode>
  );
  if (isHydration) {
    root = hydrateRoot(container, page);
  } else {
    if (!root) {
      root = createRoot(container);
    }
    root.render(page);
  }
};
