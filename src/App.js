import React, { useState } from "react";
import { motion } from "framer-motion";
import Hangman from "./components/Hangman";

function App() {
  const [page, setPage] = useState("start"); // start → instructions → user info → game
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nextPage = () => {
    if (page === "start") setPage("instructions");
    else if (page === "instructions") setPage("userinfo");
    else if (page === "userinfo") {
      if (!name || !email) {
        alert("Please enter your name and email!");
        return;
      }
      setPage("game");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#0c0c13",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      {page === "start" && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          style={{ textAlign: "center" }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            Welcome to SDC Games
          </h1>
          <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
            Hangman Challenge
          </h2>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #158cee" }}
            whileTap={{ scale: 0.95 }}
            onClick={nextPage}
            style={{
              padding: "1rem 2rem",
              fontSize: "1.2rem",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#158cee",
              color: "#fff",
            }}
          >
            Start
          </motion.button>
        </motion.div>
      )}

      {page === "instructions" && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          style={{ textAlign: "center", maxWidth: "600px" }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            How to Play
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            Guess the word by clicking letters. You have limited lives. Each
            wrong guess brings the hangman closer to doom. Solve all questions
            to win!
          </p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #07ffc9" }}
            whileTap={{ scale: 0.95 }}
            onClick={nextPage}
            style={{
              padding: "1rem 2rem",
              fontSize: "1.2rem",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#07ffc9",
              color: "#000",
            }}
          >
            Next
          </motion.button>
        </motion.div>
      )}

      {page === "userinfo" && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          style={{ textAlign: "center", maxWidth: "400px" }}
        >
          <h2>Enter Your Details</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            style={{
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: "5px",
              border: "none",
              width: "100%",
              marginBottom: "1rem",
            }}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            style={{
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: "5px",
              border: "none",
              width: "100%",
              marginBottom: "1rem",
            }}
          />
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #07ffc9" }}
            whileTap={{ scale: 0.95 }}
            onClick={nextPage}
            style={{
              padding: "1rem 2rem",
              fontSize: "1.2rem",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#07ffc9",
              color: "#000",
            }}
          >
            Play Now
          </motion.button>
        </motion.div>
      )}

      {page === "game" && <Hangman userName={name} userEmail={email} />}
    </div>
  );
}

export default App;