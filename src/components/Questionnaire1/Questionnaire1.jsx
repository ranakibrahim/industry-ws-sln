import "./Questionnaire1.scss";

export default function Questionnaire1() {
    return (
        <section className="outer">
            <h3 className="title"> What existing accounts do you have?</h3>
            <form className="form">
                <div className="form__question"></div>
                    <div className="form__input">
                        <input type="checkbox" name="q11" value="q11"/>
                        <label htmlFor="savings">A. Savings</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q12" value="q12"/>
                        <label htmlFor="savings">B. Chequing</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q13" value="q13"/>
                        <label htmlFor="savings">C. TFSA</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q14" value="q14"/>
                        <label htmlFor="savings">D. RRSP</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q11" value="q11"/>
                        <label htmlFor="savings">E. FHSA</label>
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