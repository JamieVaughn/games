import { useLoc } from "preact-iso/router";

export default function Header() {
  const { url } = useLoc();
  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/canvas">Canvas</a>
        <a href="/kings">Kings</a>
        <a href="/map">Map</a>
        <a href="/fantasy">Fantasy</a>
        {/* <a href="/error">Error</a> */}
      </nav>
      <label>
        URL:
        <input
          readonly
          value={url}
          ref={(c) => c && (c.size = c.value.length)}
        />
      </label>
    </header>
  );
}
