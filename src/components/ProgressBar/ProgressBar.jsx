import "./ProgressBar.scss";
import Progress from "../Progress/Progress";
import { useState } from "react";

export default function ProgressBar() {

    const [step, setSteps] = useState(1);
    const totalSteps = 6;

    function handleNext(){
        if(step < 6){
            setSteps((step)=> step+1);
        }
    }

    function handleStepClick(stepNumber){
        setSteps(stepNumber);
    }
  return (

    <>
        <div className="content">
            {step}
        </div>
        <div className="progbar">
        <button className="progbar__next-btn" onClick={handleNext}>Next</button>
        <div className="progbar__container">
            <Progress totalSteps={totalSteps} step={step}/>
            <div className={`${step>=1 ? "progbar__step progbar__active" : "progbar__step"}`} onClick={()=>handleStepClick(1)}>1</div>
            <div className={`${step>=2 ? "progbar__step progbar__active" : "progbar__step"}`} onClick={()=>handleStepClick(2)}>2</div>
            <div className={`${step>=3 ? "progbar__step progbar__active" : "progbar__step"}`} onClick={()=>handleStepClick(3)}>3</div>
            <div className={`${step>=4 ? "progbar__step progbar__active" : "progbar__step"}`} onClick={()=>handleStepClick(4)}>4</div>
            <div className={`${step>=5 ? "progbar__step progbar__active" : "progbar__step"}`} onClick={()=>handleStepClick(5)}>5</div>
            <div className={`${step>=6 ? "progbar__results progbar__active" : "progbar__results"}`} onClick={()=>handleStepClick(6)}>Results</div>
        </div>
        </div>
    </>
  )
  function showQuestion({step}){
    return <h2>{`my name is wowowo: ${step}`}</h2>
  }

}
