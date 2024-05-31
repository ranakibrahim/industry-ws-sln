import "./Questionnaire2.scss";

export default function Questionnaire2() {
    return (
        <section className="outer">
            <h3 className="title">What investments are you interested in?</h3>
            <form className="form">
                <div className="form__question"></div>
                    <div className="form__input">
                        <input className='form__input--checkbox' type="checkbox" name="q21" value="q21"/>
                        <label className='form__input--label' htmlFor="savings">A. Stocks</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q22" value="q22"/>
                        <label className='form__input--label' htmlFor="savings">B. Bonds</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q23" value="q23"/>
                        <label className='form__input--label' htmlFor="savings">C. Mutual Funds</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q24" value="q24"/>
                        <label className='form__input--label' htmlFor="savings">D. GICs</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q25" value="q25"/>
                        <label className='form__input--label' htmlFor="savings">E. Cryptocurrencies</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q26" value="q26"/>
                        <label className='form__input--label' htmlFor="savings">F. Real Estate</label>
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