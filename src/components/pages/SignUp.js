import React from "react";
import Card from "../ui/Card";
import { useRef } from "react";
//import { useNavigate } from "react-router-dom";
import { database } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

function SignUp(props) {
  const collectionRef = collection(database, "users");
  //const navigate = useNavigate();

  const emailInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

 

  const addUser = (e) => {
   
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if (
      enteredEmail !== "" &&
      enteredUsername !== "" &&
      enteredPassword !== ""
    ) {
      props.signIn();
      addDoc(collectionRef, {
        email: enteredEmail,
        username: enteredUsername,
        password: enteredPassword,
        isLogin: false,
      }).then(() => {
        
      });
    }
    else
    {
      alert("Please enter the inputs")
    }
  };

  /* function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const userData = {
      email: enteredEmail,
      username: enteredUsername,
      password: enteredPassword,
      login: false,
    };

    props.signIn();
    props.addUser(userData);
  }*/

  return (
    <div className="card-container">
      <Card>
        <div className="overlay">
          <form>
            <div className="con">
              <header className="head-form">
                <h2>Sign Up</h2>
              </header>
              <br />
              <div className="field-set">
                <input
                  className="form-input"
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  ref={emailInputRef}
                  autoComplete="off"
                  required
                />
                <br />
                <input
                  className="form-input"
                  id="txt-input"
                  type="text"
                  placeholder="Username"
                  ref={usernameInputRef}
                  autoComplete="off"
                  required
                />
                <br />
                <input
                  className="form-input"
                  type="Password"
                  placeholder="Password"
                  id="pw"
                  name="password"
                  ref={passwordInputRef}
                  required
                />
                <br />
                <button className="log-in" onClick={addUser}>
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default SignUp;
