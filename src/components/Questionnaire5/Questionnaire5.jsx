import "./Questionnaire5.scss";

export default function Questionnaire5() {
    return (
        <section className="outer">
            <h3 className="title">If time permits, how much time per week do you plan to spend on financial literacy?</h3>
            <form className="form">
                <div className="form__question"></div>
                    <div className="form__input">
                        <input className='form__input--checkbox' type="checkbox" name="q41" value="q41"/>
                        <label className='form__input--label' htmlFor="savings">A. less than 15 minutes</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q42" value="q42"/>
                        <label className='form__input--label' htmlFor="savings">B. 15-30 minutes</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q43" value="q43"/>
                        <label className='form__input--label' htmlFor="savings">C. 30 minutes</label>
                    </div>

                {/* <div className="form__button">   
                    <button type="submit">Next</button>
                </div> */}
                {/* <div className="form__bar">
                </div> */}
            </form>



            



        </section>


    )
}