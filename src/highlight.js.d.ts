import type { LanguageFn } from "highlight.js";

declare module "highlight.js/lib/languages/*" {
  export default LanguageFn;
}
