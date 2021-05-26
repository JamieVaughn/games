import hydrate from "preact-iso/hydrate";
import { LocationProvider, Router } from "preact-iso/router";
import lazy, { ErrorBoundary } from "preact-iso/lazy";
import Home from "./pages/home/index.js";
import NotFound from "./pages/_404.js";
import Header from "./header.js";

import "./style.css";

const Canvas = lazy(() => import("./pages/canvas/index.js"));
const Kings = lazy(() => import("./pages/kings/index.js"));
const Map = lazy(() => import("./pages/map/index.js"));
const TicTacToe = lazy(() => import("./pages/tictactoe/index.js"));
const Fantasy = lazy(() => import("./pages/fantasy/index.js"));

export function App() {
  return (
    <LocationProvider base='games'>
      <div class="app">
        <Header />
        <ErrorBoundary>
          <Router>
            <Home path="/" />
            <Canvas path="/canvas" />
            <Kings path="/kings" />
            <Map path="/map" />
            <TicTacToe path="/tictactoe" />
            <Fantasy path="/fantasy" />
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
