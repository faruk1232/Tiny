import React from "react";
import Card from "../ui/Card";
import "./SignIn.css";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { database } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Constants from "../../Helpers/Constants.js";

function SignIn(props) {
  const collectionRef = collection(database, "users");
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const navigate = useNavigate();

  /* function addUser(userData) {
    fetch("https://tinypostx-default-rtdb.firebaseio.com/user.json", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/sign-in", { replace: true });
    });
  }*/

  // function CheckUser() {
  //   const enteredUsername = usernameInputRef.current.value;
  //   const enteredPassword = passwordInputRef.current.value;
  //   fetch("https://tinypostx-default-rtdb.firebaseio.com/user.json")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       for (const key in data) {
  //         var username, password;
  //         username = data[key].username;
  //         password = data[key].password;
  //         console.log(data[key]);
  //         if (username === enteredUsername && password === enteredPassword) {
  //           data[key].login = true;
  //           navigate("/profile", { replace: true });
  //         }
  //       }
  //     });
  // }

  function CheckUser() {
    const usernameToQuery = usernameInputRef.current.value;
    const passwordToQuery = passwordInputRef.current.value;
    const q = query(collectionRef, where("username", "==", usernameToQuery));

    getDocs(q).then((response) => {
      if (response.docs.length === 0) {
        alert("No users have found under this username.");
      } else {
        response.docs.map((item) => {
          if (item.get("password") === passwordToQuery) {
            Constants.username = usernameToQuery;

            window.localStorage.setItem(
              "USER_DATA",
              JSON.stringify(usernameToQuery)
            );
            navigate("/");
          }
          /* response.forEach((user) => {            
            const getUser = doc(database, "users", user.id);
            updateDoc(getUser, {
              isLogin: true,
            });
          });*/
          return {};
        });
      }
    });
  }

  const [textType, setTextType] = useState("password");

  const togglePasswordVisiblity = (e) => {
    e.preventDefault();
    if (textType === "password") {
      setTextType("text");
    } else {
      setTextType("password");
    }
  };

  function SignInForm() {
    return (
      <div className="card-container">
        <Card>
          <div className="overlay">
            <form>
              <div className="con">
                <header className="head-form">
                  <h2>Log In</h2>
                  <p>login here using your username and password</p>
                </header>
                <br />
                <div className="field-set">
                  <input
                    className="form-input"
                    id="txt-input"
                    type="text"
                    placeholder="Username"
                    ref={usernameInputRef}
                    required
                  />
                  <br />
                  <input
                    className="form-input"
                    type={textType}
                    placeholder="Password"
                    id="pwd"
                    name="password"
                    ref={passwordInputRef}
                    required
                  />
                  <span>
                    <i
                      className="fa fa-eye"
                      aria-hidden="true"
                      type="button"
                      id="eye"
                      onClick={togglePasswordVisiblity}
                    ></i>
                  </span>
                  <br />
                  <button type="button" className="log-in" onClick={CheckUser}>
                    Log In
                  </button>
                </div>
                <div className="other">
                  <button className="btn submits frgt-pass">
                    Forgot Password
                  </button>
                  <button
                    className="btn submits sign-up"
                    onClick={props.signUp}
                  >
                    Sign Up
                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div>
      {props.form === "SignIn" ? (
        <SignInForm />
      ) : (
        <SignUp form={props.form} signIn={props.signIn} />
      )}
    </div>
  );
}

export default SignIn;
