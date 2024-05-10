import SigUpIllustration from "../../assets/images/illustration-sign-up-desktop.svg";
import IconList from "../../assets/images/icon-list.svg";
import "./SignUp.css";
import { useState } from "react";

export const SignUp: React.FC = ({ setIsValidEmail }) => {
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);

  const checkEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email) && email !== "") {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
      setHasError(true);
    }
  };

  return (
    <div className="signup">
      <section className="signup-info">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>
            {" "}
            <img
              src={IconList}
              alt="list-icon"
              className="icon-list-logo"
            />{" "}
            Product discovery and building what matters
          </li>
          <li>
            <img src={IconList} alt="list-icon" className="icon-list-logo" />{" "}
            Measuring to ensure updates are a success
          </li>
          <li>
            <img src={IconList} alt="list-icon" className="icon-list-logo" />
            And much more!
          </li>
        </ul>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          {hasError && (
            <span className="err-message">Valid email required </span>
          )}
          <input
            type="email"
            placeholder="email@company.com"
            id="email"
            autoComplete="off"
            onChange={checkEmail}
            value={email}
            className={hasError ? "error-message" : ""}
          />
          <button type="submit"> Subscribe to monthly newsletter</button>
        </form>
      </section>
      <section className="sign-up-illustration">
        <img src={SigUpIllustration} alt="sign-up-illustration" />
      </section>
    </div>
  );
};
