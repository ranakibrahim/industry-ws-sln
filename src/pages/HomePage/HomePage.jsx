import "./HomePage.scss";
import { useState } from "react";
import Headers from "../../components/Headers/Headers";
import QuestionContainer from "../../components/QuestionContainer/QuestionContainer";

export default function HomePage() {
  const [step, setSteps] = useState(1);
  return (
    <>
      <Headers step={step}/>
      <QuestionContainer step={step} setSteps={setSteps}/>
    </>
  );
}
