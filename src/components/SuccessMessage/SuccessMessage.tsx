import React from "react";
import IconList from "../../assets/images/icon-list.svg";
import "./SuccessMessage.css";

export const SuccessMessage: React.FC = () => {
  return (
    <section className="succesMessageSection">
      <div>
        <img src={IconList} alt="Icon list" className="icon-list" />
        <h1> Thanks for subscribing!</h1>
      </div>

      <div>
        <p className="paragraph">
          A confirmation email has been sent to{" "}
          <strong>ash@loremcompany.com.</strong>
          Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>

      <button className="dismiss-btn"> Dismiss message</button>
    </section>
  );
};
