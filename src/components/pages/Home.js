import React from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../firebase";

import { useState, useEffect } from "react";
import Constants from "../../Helpers/Constants";
import Post from "../HomeContent/Post";


function Home() {
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    const data = window.localStorage.getItem("USER_DATA");

    if (data !== "undefined") {
      Constants.username = JSON.parse(data);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "USER_DATA",
      JSON.stringify(Constants.username)
    );
  });

  useEffect(() => {
    const collectionRef = collection(database, "users");
    try {
      const q = query(
        collectionRef,
        where("username", "==", Constants.username)
      );

      getDocs(q).then((response) => {
        if (response.docs.length === 0) {
        } else {
          response.docs.map((item) => {
            setUsername(item.get("username"));
            return {};
          });
        }
      });
    } catch (e) {
      console.log("Error");
    }
  }, []);

  return (
    <div>
      <h1>{username}</h1>
      
    </div>
  );
}

export default Home;
