import "./Questionnaire4.scss";

export default function Questionnaire4() {
    return (
        <section className="outer">
            <h3 className="title">What areas are you interested in?</h3>
            <form className="form">
                <div className="form__question"></div>
                    <div className="form__input">
                        <input className='form__input--checkbox' type="checkbox" name="q41" value="q41"/>
                        <label className='form__input--label' htmlFor="savings">A. Investing</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q42" value="q42"/>
                        <label className='form__input--label' htmlFor="savings">B. Saving</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q43" value="q43"/>
                        <label className='form__input--label' htmlFor="savings">C.Taxes</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q44" value="q44"/>
                        <label className='form__input--label' htmlFor="savings">D. Crypto</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q45" value="q45"/>
                        <label className='form__input--label' htmlFor="savings">E. Finance</label>
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