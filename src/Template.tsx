import { FunctionComponent } from "react";
import { ReactComponent as ComputostLogo } from "./assets/computost.svg";
import { HelmetServerState } from "react-helmet-async";

export const Template: FunctionComponent<{
  contents: string;
  helmet: HelmetServerState;
}> = ({ contents, helmet }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/computost.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <>{helmet.title.toComponent()}</>
      </head>
      <body>
        <h1
          style={{
            alignItems: "center",
            backgroundColor: "#211500",
            display: "flex",
            fontSize: "1.75em",
            margin: 0,
            padding: 8,
          }}
        >
          <ComputostLogo
            title="Computost Consulting"
            style={{ fill: "#fcecd1", height: "1em", marginRight: "0.25em" }}
          />
          <a
            href="/"
            style={{
              color: "#fcecd1",
            }}
          >
            Computost Consulting
          </a>
        </h1>
        <main
          style={{ padding: 8 }}
          id="root"
          dangerouslySetInnerHTML={{ __html: contents }}
        />
      </body>
    </html>
  );
};
