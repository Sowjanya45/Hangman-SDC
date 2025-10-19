import React, { useState } from "react";
import { motion } from "framer-motion";
import Hangman from "./components/Hangman";

function App() {
  const [page, setPage] = useState("start");
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
        width: "100vw",
        height: "100vh",
        background: "#0e0818",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        textAlign: "center",
        overflow: "hidden",
        padding: "1rem",
      }}
    >
      <style>
        {`input::placeholder { color: #ffffffa8; }`}
      </style>

      {/* START PAGE */}
      {page === "start" && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ width: "90%", maxWidth: "800px" }}
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontSize: "clamp(4rem, 5vw, 4rem)",
              fontWeight: "bold",
              textShadow: "0 0 25px rgba(255,255,255,0.6)",
            }}
          >
            Welcome to <span style={{ color: "#00fff0" }}>SDC Games</span>
          </motion.h1>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              fontSize: "clamp(1.8rem, 2.5vw, 2rem)",
              margin: "2vh 0",
              color: "#fff",
            }}
          >
            🎯 The Ultimate Hangman Challenge
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px #00fff0" }}
            whileTap={{ scale: 0.95 }}
            onClick={nextPage}
            style={{
              padding: "clamp(1rem, 1.3vw, 1.3rem) clamp(2rem, 3vw, 3rem)",
              border: "none",
              borderRadius: "15px",
              background: "linear-gradient(45deg, #00fff0, #0075ff)",
              color: "#000",
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Start
          </motion.button>
        </motion.div>
      )}

      {/* INSTRUCTIONS PAGE */}
      {page === "instructions" && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            width: "90%",
            maxWidth: "800px",
            lineHeight: "1.6",
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)",
              fontWeight: "bold",
              color: "#00fff0",
              textShadow: "0 0 20px #00fff0",
              marginBottom: "1rem",
              textAlign: "left",
            }}
          >
            🧩 How to Play
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{ textAlign: "left" }}
          >
            <ol style={{ listStyleType: "decimal", paddingLeft: "2rem" }}>
              <li>Guess the word using letters (A–Z) or numbers (0–9).</li>
              <li>You have <strong>6 lives ❤️</strong> to start.</li>
              <li>Each wrong guess brings the hangman one step closer to doom ☠️.</li>
              <li>You can skip for <strong>5 times </strong>at max</li>
              <li>Guess the maximum number of words before losing all lives to win.</li>
              <li>Some questions may include charts — observe carefully 👀.</li>
              <li>Your <strong>name, score, and time</strong> are recorded automatically.</li>
            </ol>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px #00fff0" }}
            whileTap={{ scale: 0.95 }}
            onClick={nextPage}
            className="skip-btn"
          >
            Continue →
          </motion.button>
        </motion.div>
      )}

      {/* USER INFO PAGE */}
      {page === "userinfo" && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            width: "90%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              marginBottom: "2rem",
              color: "#00fff0",
              fontSize: "clamp(1.5rem, 2vw, 2rem)",
              textShadow: "0 0 15px #00fff0",
            }}
          >
            🎮 Enter Your Details
          </h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            style={{
              width: "100%",
              padding: "clamp(0.6rem, 1vw, 0.8rem)",
              borderRadius: "10px",
              border: "none",
              marginBottom: "1rem",
              fontSize: "clamp(0.9rem, 1vw, 1rem)",
              outline: "none",
              background: "rgba(255,255,255,0.1)",
              color: "white",
            }}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            style={{
              width: "100%",
              padding: "clamp(0.6rem, 1vw, 0.8rem)",
              borderRadius: "10px",
              border: "none",
              marginBottom: "2rem",
              fontSize: "clamp(0.9rem, 1vw, 1rem)",
              outline: "none",
              background: "rgba(255,255,255,0.1)",
              color: "white",
            }}
          />
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px #00fff0" }}
            whileTap={{ scale: 0.95 }}
            onClick={nextPage}
            className="skip-btn"
          >
            Play Now 🚀
          </motion.button>
        </motion.div>
      )}

      {/* GAME PAGE */}
      {page === "game" && <Hangman userName={name} userEmail={email} />}
    </div>
  );
}

export default App;
