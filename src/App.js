import logo from "./logo.svg";
import "./App.css";

import "semantic-ui-css/semantic.min.css";

import Cat from "./component/Cat";
import MouseTracker from "./component/MouseTracker";

function App() {
  return (
    <div>
      <MouseTracker render={(mouse) => <Cat mouse={mouse} />}></MouseTracker>
    </div>
  );
}

export default App;
