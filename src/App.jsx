import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Headers from "./components/Headers/Headers";
import Questionnaire from "./components/Questionnaire/Questionnaire";

function App() {
  return (
    <>
      <NavBar />
      <Headers />
      <main className="main">
        <Questionnaire />
      </main>
    </>
  );
}

export default App;
