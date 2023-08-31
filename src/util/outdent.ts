const outdent = (block: string) => {
  const lines = block
    .split(/\r?\n/)
    .filter((line, index) => index !== 0 || line.length > 0);
  const whiteSpaceToCut = Math.min(
    ...lines.map((line) => line.replace(/^(\s*).*/, "$1").length)
  );
  return lines.map((line) => line.substring(whiteSpaceToCut)).join("\n");
};
export default outdent;

/* istanbul ignore if */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("outdents a string", () => {
    expect(
      outdent(`
        if (sayHello)
        {
          console.log("${"Hello"}");
        }`)
    ).toBe('if (sayHello)\n{\n  console.log("Hello");\n}');
  });
}
