import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const title = "This is the blog project";
  const likes = 50;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>

      <p>liked {likes} times</p>
    </div>
  );
}

export default App;
