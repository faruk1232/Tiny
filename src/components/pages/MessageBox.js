import React from "react";
import "./MessageBox.css";
import { useNavigate } from "react-router-dom";

function MessageBox(props) {
  const navigate = useNavigate();

  function signOut() {
    window.localStorage.removeItem("USER_DATA");
    navigate("/sign-in");
    props.handleMessageBox()
  }

  return (
    <div className="confirm">
      <h1>Confirm your action</h1>
      <p>
        Are you <strong>really</strong> sure that you want to Sign Out?
      </p>
      <br />
      <button onClick={props.handleMessageBox}>Cancel</button>
      <button autofocus onClick={signOut}>
        Confirm
      </button>
    </div>
  );
}

export default MessageBox;
