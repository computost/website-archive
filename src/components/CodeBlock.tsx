import type { LanguageFn } from "highlight.js";
import hljs from "highlight.js/lib/core";
import { FunctionComponent } from "react";
import "highlight.js/styles/github-dark.css";
import outdent from "../util/outdent";

const CodeBlock: FunctionComponent<{
  code: string;
  language: LanguageFn;
  languageName: string;
}> = ({ code, language, languageName }) => {
  hljs.registerLanguage(languageName, language);
  return (
    <pre
      style={{
        border: "1px solid black",
        margin: "auto",
        marginTop: "1em",
        width: "fit-content",
      }}
    >
      <code
        className="hljs"
        dangerouslySetInnerHTML={{
          __html: hljs.highlight(outdent(code), { language: languageName })
            .value,
        }}
      />
    </pre>
  );
};
export default CodeBlock;
