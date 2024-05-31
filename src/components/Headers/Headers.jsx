/* eslint-disable react/prop-types */
import "./Headers.scss";

export default function Headers({step}) {
  return (
    <section className="headers">
      <h1>WealthJourney Planner</h1>
      <h2 className="text">
        Get personalized product recommendations based on your financial
        priorities and goals!
      </h2>
      <h2 className={step!== 6 ? "results-hidden" : ""}>
        These are our top recommendations for you to maximize financial growth.
        The top 2 results will show up in your Home dashboard until fulfilled.
      </h2>
    </section>
  );
}
