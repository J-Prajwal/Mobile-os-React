// import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import List from './components/List'

function App() {
  const mobileOS = ["Android", "Blackberry", "I Phone", "Windows Phone"];
  const mobileMan = ["Samsung", "HTC", "Micromax", "Apple"];

  return (
    <div className="App">
      <Heading head={"Mobile Operating System"} />

      <List data = {mobileOS} />

      <Heading head={"Mobile Manufacturers"} />

      <List data = {mobileMan} />
    </div>
  );
}

export default App;
