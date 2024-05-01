import SigUpIllustration from "../../assets/images/illustration-sign-up-desktop.svg";
import IconList from "../../assets/images/icon-list.svg";
import "./SignUp.css";

export const SignUp: React.FC = () => {
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

        <form>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            placeholder="email@company.com"
            id="email"
            autoComplete="off"
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
