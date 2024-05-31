
import "./ResultsPage.scss";
import arrow from "../../assets/icons/arrow-icon.svg";

export default function ResultsPage() {
  return (
    <>
      <main className="results">
        <section className="results__container">
          <div className="number-box">1</div>
          <div className="box box1">
            <p>
              Make 4% on your cash. <br />{" "}
              <span>
                Transfer your direct deposits <br />{" "}
                <a href="#">
                  here. <img src={arrow} alt="" />
                </a>
              </span>
            </p>
          </div>
          <div className="box box2">
            <p>
              What is a <strong>HISA?</strong>
            </p>
          </div>
          <div className="number-box">2</div>
          <div className="box box3">
            <p>
              Why do I need a <strong>TFSA? </strong>
              <br /> How do I use it?
            </p>
          </div>
          <div className="box box4">
            <p>
              <span>Boost your savings!</span> <br /> Open a{" "}
              <strong>TFSA</strong> account with us <br />
              <div className="end">
                <span>today!</span>
                <img src={arrow} alt="" />
              </div>
            </p>
          </div>
          <div className="number-box">3</div>
          <div className="box box5">
            <p>
              <span> Grow your savings.</span> <br /> Learn about moderate-risk
              investment
              <div className="end">
                <span> portfolios.</span>
                <img src={arrow} alt="" />
              </div>
            </p>
          </div>
          <div className="box box6">
            <p>
              Learn about risk and <strong>investment strategies</strong> for
              new investors.
            </p>
          </div>
          <div className="number-box">4</div>
          <div className="box box7">
            <p>
              <strong>Here</strong> are some basic guidelines for starting a
              budget.
            </p>
          </div>
          <div className="box box8">
            <p>
              <span>Establish a budget.</span> <br /> Set aside some time for
              <div className="end">
                <span> financial housekeeping.</span>
                <img src={arrow} alt="" />
              </div>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
