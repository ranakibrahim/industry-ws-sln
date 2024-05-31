import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Headers from "./components/Headers/Headers";
import Questionnaire1 from "./components/Questionnaire1/Questionnaire1";

function App() {
  return (
    <>
      <NavBar />
      <Headers />
      <main className="main">
        <Questionnaire1 />
      </main>
    </>
  );
}

export default App;
