import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape } from "vite-plugin-ssr/server";
import { PageContext } from "./types";
import { Template } from "./Template";
import { FilledContext, Helmet, HelmetProvider } from "react-helmet-async";

export const passToClient = ["documentProps", "pageProps"];

export const render = ({ Page, pageProps }: PageContext) => {
  const helmetContext: FilledContext = {} as FilledContext;
  const page = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Computost Consulting</title>
      </Helmet>
      <Page {...pageProps} />
    </HelmetProvider>
  );
  return {
    documentHtml: dangerouslySkipEscape(
      "<!DOCTYPE html>\n" +
        ReactDOMServer.renderToString(
          <Template contents={page} helmet={helmetContext.helmet} />
        )
    ),
    pageContext: { helmetContext },
  };
};
