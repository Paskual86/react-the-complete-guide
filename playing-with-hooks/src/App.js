import "./App.css";
import Count from "./Components/Count";
import JokeCall from "./Components/JokeCall";
import RefreshJoke from "./Components/RefreshJoke";

function App() {
  const onRequestJokeHandler = () => {
    console.log("New Joke");
  };
  return (
    <div className="App">
      <Count></Count>
      <JokeCall></JokeCall>
      <RefreshJoke onRequestJoke={onRequestJokeHandler}></RefreshJoke>
    </div>
  );
}

export default App;
