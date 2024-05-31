import { useState } from "react";
import Progress from "../Progress/Progress";
import arrowIcon from '../../assets/icons/arrow-icon.svg'
import "./QuestionContainer.scss";
import Questionnaire1 from "../Questionnaire1/Questionnaire1"

export default function ProgressBar() {

    const [step, setSteps] = useState(1);
    const totalSteps = 6;

    function handleNext(){
        if(step < totalSteps){
            setSteps((step)=> step+1);
        }
    }

    function handleStepClick(stepNumber){
        setSteps(stepNumber);
    }

    function showQuestion(step){

        switch(step){
            case 1: return <Questionnaire1 />;
            case 2: return <Questionnaire2 />
            case 3: return <Questionnaire3 />
            case 4: return <Questionnaire4 />
            case 5: return <Questionnaire5 />
        }
      }

  return (

    <main className="question__container">
        <div className="question__content">
            {showQuestion(step)}
        </div>
        <div className="progbar">
        <button className="progbar__next-btn" onClick={handleNext}>
            Next 
            <img className='progbar__next-btn-icon' src={ arrowIcon } alt='arrow'></img>
        </button>
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
    </main>
  )
  


}
