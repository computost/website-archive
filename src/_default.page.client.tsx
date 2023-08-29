import { StrictMode } from "react";
import { Root, createRoot, hydrateRoot } from "react-dom/client";
import "./global.css";
import { PageContext } from "./types";
import { HelmetProvider } from "react-helmet-async";
import { Template } from "./Template";

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
