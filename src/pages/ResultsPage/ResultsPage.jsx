import Headers from "../../components/Headers/Headers";
import "./ResultsPage.scss";

export default function ResultsPage() {
  return (
    <>
      <Headers />
      <main className="results">
        <section className="results__container">
          <div className="box box1">
            <p>
              Make 4% on your cash. <br /> Transfer your direct deposits{" "}
              <a href="#">here.</a>
            </p>
          </div>
          <div className="box box2">
            <h2>What is a HISA?</h2>
          </div>
          <div className="box box3">
            <h2>
              Why do I need a TFSA? <br /> How do I use it?
            </h2>
          </div>
          <div className="box box4">
            <p>
              Boost your savings! <br /> Open a TFSA account with us today!
            </p>
          </div>
          <div className="box box5">
            <p>
              Grow your savings. <br /> Learn about moderate-risk investment
              portfolios.
            </p>
          </div>
          <div className="box box6">
            <h2>
              Learn about risk and investment strategies for new investors.
            </h2>
          </div>
          <div className="box box7">
            <h2>Here are some basic guidelines for starting a budget.</h2>
          </div>
          <div className="box box8">
            <p>
              Establish a budget. <br /> Set aside some time for financial
              housekeeping.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
