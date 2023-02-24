import { useState } from "react";
import Post from "./components/Post";
import PostsList from "./components/PostsList";
import GlobalFooter from "./components/UI/GlobalFooter";
import Logos from "./components/Logos";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main>
        <PostsList />
      </main>
      <Logos />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <GlobalFooter />
    </div>
  );
}

export default App;
