import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import data from "./components/data";

function App() {
  const cards = data.map((item) => {
    return <Hero key={item.title} {...item} />;
  });

  return (
    <div className="App">
      <NavBar />
      <div className="container">{cards}</div>
    </div>
  );
}

export default App;
