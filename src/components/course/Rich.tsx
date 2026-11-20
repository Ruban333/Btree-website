import { Fragment } from "react";

/** Renders **bold** and line breaks (\n) from content strings. */
export default function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line.split("**").map((part, j) => (j % 2 ? <b key={j} style={{ color: "var(--ink)" }}>{part}</b> : <Fragment key={j}>{part}</Fragment>))}
        </Fragment>
      ))}
    </>
  );
}
