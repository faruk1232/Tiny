import { Routes, Route } from "react-router";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import "./App.css";
import SignIn from "./components/pages/SignIn";
import { useState } from "react";
import MessageBox from "./components/pages/MessageBox";

function App() {
  const [form, setForm] = useState("SignIn");
  const [showMessageBox, setShowMessageBox] = useState(false);

  function handleMessageBox() 
  {
    if(showMessageBox)
    {
      setShowMessageBox(false)
    }
    else
    {
      setShowMessageBox(true)
    }
  }

  function setSignUp() 
  {
    setForm("SignUp");
  }
  function setSignIn() 
  {
    setForm("SignIn");
  }
  return (
    <>
      <Nav form={form} signIn={setSignIn} handleMessageBox={handleMessageBox}/>
      {showMessageBox ? <MessageBox handleMessageBox={handleMessageBox}/> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sign-in"
          element={<SignIn form={form} signIn={setSignIn} signUp={setSignUp} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-out" element={<MessageBox />} />
      </Routes>
    </>
  );
}

export default App;
