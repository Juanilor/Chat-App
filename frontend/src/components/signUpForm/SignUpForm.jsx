import { useState } from "react";
import useSignUp from "../../hooks/useSignUp";
// import SignUpFormInputs from "./SignUpFormInputs";

const SignUpForm = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { signup} =useSignUp()

  const handleSubmit = async (e) => {
    e.preventDefault();


    await signup(inputs)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            <span>Username</span>
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">
            <span>Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">
            <span>Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Re-Enter your password"
            name="confirmPassword"
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
          />
        </div>
        {/* <SignUpFormInputs
          inputPlaceholder={"Enter your password"}
          inputType={"password"}
          inputs={inputs}
          setInputs={setInputs}
          inputValue={inputs.password}
        /> */}
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default SignUpForm;
