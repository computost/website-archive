import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import "./global.css";
import { PageContext } from "./types";
import { HelmetProvider } from "react-helmet-async";

export const clientRouting = true;

let root: Root;
export const render = ({ isHydration, Page, pageProps }: PageContext) => {
  const container = document.getElementById("root")!;
  const page = (
    <React.StrictMode>
      <HelmetProvider>
        <Page {...pageProps} />
      </HelmetProvider>
    </React.StrictMode>
  );
  if (isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }
};
