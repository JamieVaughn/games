import hydrate from "preact-iso/hydrate";
import { LocationProvider, Router } from "preact-iso/router";
import lazy, { ErrorBoundary } from "preact-iso/lazy";
import Home from "./pages/home/index.js";
import NotFound from "./pages/_404.js";
import Header from "./header.js";

import "./style.css";

const About = lazy(() => import("./pages/about/index.js"));
const Kings = lazy(() => import("./pages/kings/index.js"));

export function App() {
  return (
    <LocationProvider base='games'>
      <div class="app">
        <Header />
        <ErrorBoundary>
          <Router>
            <Home path="/" />
            <About path="/about" />
            <Kings path="/kings" />
            <NotFound default />
          </Router>
        </ErrorBoundary>
      </div>
    </LocationProvider>
  );
}

hydrate(<App />);

export async function prerender(data) {
  const { default: prerender } = await import("preact-iso/prerender");
  return await prerender(<App {...data} />);
}
