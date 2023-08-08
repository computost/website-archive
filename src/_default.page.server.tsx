import ReactDOMServer from "react-dom/server";
import { PageContext } from "./types";
import template from "./index.html?raw";

export const passToClient = ["documentProps", "pageProps"];
export const render = ({ exports, Page, pageProps }: PageContext) => ({
  documentHtml: template
    .replace("{TITLE}", exports.title ?? "Computost Consulting")
    .replace("{PAGE}", ReactDOMServer.renderToString(<Page {...pageProps} />)),
  pageContext: {
    exports,
  },
});
