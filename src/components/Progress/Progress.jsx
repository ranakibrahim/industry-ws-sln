/* eslint-disable react/prop-types */
import "./Progress.scss";

export default function Progress({totalSteps, step}) {

    let progress = ((step-1)/(totalSteps - 1))*100;
    if(step === 4){
        progress = 55;
    }
    if(step === 5){
        progress = 75;
    }
    
  return (
    <div className = "progbar__progress">
      <div className = "progbar__progress-innerdiv" style={{width:`${progress}%`}}></div>
    </div>
  )
}
