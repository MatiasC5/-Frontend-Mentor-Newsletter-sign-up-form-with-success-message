import { useState } from "react";
import { SignUp } from "./components/SignUp/SignUp";
import { SuccessMessage } from "./components/SuccessMessage/SuccessMessage";
import PropTypes from "prop-types";

interface Props {
  setIsValidEmail: (isValidEmail: boolean) => void;
}

export const App: React.FC = () => {
  const [isValidEmail, setIsValidEmail] = useState<Props>();

  return (
    <main>
      {isValidEmail ? (
        <SuccessMessage />
      ) : (
        <SignUp setIsValidEmail={setIsValidEmail} />
      )}
    </main>
  );
};

App.propTypes = {
  setIsValidEmail: PropTypes.func.isRequired,
};
