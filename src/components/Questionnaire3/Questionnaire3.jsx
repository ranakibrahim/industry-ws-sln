import "./Questionnaire3.scss";

export default function Questionnaire3() {
    return (
        <section className="outer">
            <h3 className="title">What is the main purpose of your investment?</h3>
            <form className="form">
                <div className="form__question"></div>
                    <div className="form__input">
                        <input className='form__input--checkbox' type="checkbox" name="q31" value="q31"/>
                        <label className='form__input--label' htmlFor="savings">A. Retirement</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q32" value="q32"/>
                        <label className='form__input--label' htmlFor="savings">B. Buying a home</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q33" value="q33"/>
                        <label className='form__input--label' htmlFor="savings">C.Starting a businesss</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q34" value="q34"/>
                        <label className='form__input--label' htmlFor="savings">D. Saving for education</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q35" value="q35"/>
                        <label className='form__input--label' htmlFor="savings">E. Building wealth</label>
                    </div>
                    <div className="form__input">
                        <input type="checkbox" name="q36" value="q36"/>
                        <label className='form__input--label' htmlFor="savings">F. Others</label>
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