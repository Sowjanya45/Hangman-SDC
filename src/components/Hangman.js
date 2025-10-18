import React, { Component } from "react";
import Confetti from "react-confetti";

import step0 from "./images/0.jpg";
import step1 from "./images/1.jpg";
import step2 from "./images/2.jpg";
import step3 from "./images/3.jpg";
import step4 from "./images/4.jpg";
import step5 from "./images/5.jpg";
import step6 from "./images/6.jpg";

// ===================== QUESTIONS =====================
const QUESTIONS = [
  // LEVEL – EASY
   
  { q: "A student scored 80 in mid-sem (40% weight) and 90 in end-sem (60% weight). What is the weighted average score?", e: "ODY=" },
  { q: "If sleeping hours over months decrease at a steady rate, which statistical concept can best describe this rate of change?", e: "c2xvcGU=" },
  { q: "When all values in a dataset are identical, the variance will be?", e: "emVyby==" },
  { q: "A die is rolled in the “Dice Challenge.” The Probability of rolling an even number or a number > 4 is x/y. Find (x+y).", e: "NQ==" },
  { q: "The marks of 7 students are: 45, 56, 51, 61, 72, 59. If one more student with 48 marks joins, what will be the new median?", e: "NTY=" },
  { q: "The NITW’s TZ squad has a perfect balance of brains and energy — with a male-to-female ratio of 3:2. If there are 30 female members, can you decode how many total students proudly wear the NITW merch?", e: "NzU=" },
  { q: "The measure that tells how far data points are from the average is called ___", e: "ZGV2aWF0aW9u" },
  { q: "The number of participants in a hackathon across 5 departments: CSE – 80, ECE – 70, MECH – 60, CIVIL – 40, EEE – 50. If the total turnout increased by 25% next year, what would be the new total?", e: "Mzc1" },
  { q: "A student’s score in a Machine Learning aptitude test is at the 85th percentile. If 200 students took the test, how many scored below them?", e: "MTcw" },
  { q: "In NITW’s attendance dataset, the workshop with the maximum frequency of participation corresponds to which measure of central tendency?", e: "bW9kZQ==" },

  // LEVEL – MEDIUM
  { q: "A scholarship amount of 1330$ is to be divided among three students, Rahul, Jay, and Naman, in the ratio 2:5:7. How much money does Jay receive?", e: "NDc1" },
  { q: "When you calculate the average deviation of each data point from the mean, what are you interested in?", e: "VmFyaWFuY2U=" },
  { q: "A student divides weekly study time into PIE CHART (1). What is the “mode” of all preferences?", e: "Q29yZQ==", chartLink: "https://drive.google.com/file/d/13fQM8Kj5ouA5QJ7AOeHcroZcXoqxXUFa/view?usp=sharing" },
  { q: "If total study time = 40 hrs/week, the time spent on Core is greater than Coding by ‘x’ hrs in a week. What is the xth day in a week?", e: "VGh1cnNkYXk=" },
  { q: "If 10% of attendees in each event were out of our college, find the number of attendees from our college who attended across all events. BAR CHART (1)", e: "MjM0", chartLink: "https://drive.google.com/file/d/1VzMIQrNQfjYvOa6CtCOnx1gZRmxIPRgj/view?usp=sharing" },
  { q: "What is the maximum drop in the turnout of participants for 2 consecutive events? BAR CHART (1)", e: "MzA=", chartLink: "https://drive.google.com/file/d/1VzMIQrNQfjYvOa6CtCOnx1gZRmxIPRgj/view?usp=sharing" },
  { q: "Our team analysed coding times and found a few students took extremely longer than others, pulling the average upward. Which measure of central tendency is most affected by such extreme values?", e: "TWVhbg==" },
  { q: "In a course exam, internal marks carry 40% weight, and the end-semester exam carries 60%. A student scored 72 in internals and needs an overall score of at least 75 to get an A grade. What is the minimum score they must get in the end-semester exam?", e: "NzY=" },
  { q: "A bar chart shows NITW social media followers over 4 months: June – 500, July – 625, Aug – 875, Sept– 1050, Oct - 1218. What’s the average monthly percentage increase? LINE GRAPH (2)", e: "MjU=", chartLink: "https://drive.google.com/file/d/1Jau36gr7tCJILH1uBnvUOs3rlEb88jF0/view?usp=sharing" },
  { q: "By which month is it estimated that the number of followers cross 1900 if the followers grow every month with a constant rate ‘x’, the integer part of the answer to the previous question. LINE GRAPH (2)", e: "RGVjZW1iZXI=", chartLink: "https://drive.google.com/file/d/1Jau36gr7tCJILH1uBnvUOs3rlEb88jF0/view?usp=sharing" },
  { q: "Probability of a student winning “The Data Chase” = 0.6, “Frontend Frenzy” = 0.7, both = 0.4. Probability of winning at least one is x/y. Find x+y.", e: "OQ==" },
  { q: "In the dataset of quiz marks, 50% of students scored below a certain value and 50% above it. What is that value called in measures of central tendency?", e: "bWVkaWFu" },
  { q: "The bar chart shows the percentage of students from each year of study who enrolled in the SDC (all values are percentages). Total strength of the club is 200 PIE CHART (2). What is the difference between number of students from 4th and 3rd year to 2nd and 1st year.", e: "MjA=", chartLink: "https://drive.google.com/file/d/1aTi2v7Lj-crsrq6uu7XhEt5qVqxKVBt3/view?usp=sharing" },
  { q: "In a survey, students’ favourite domains are shown as: Cyber Security: 90°, Data Analytics: 108°, Web Development: 72°, Coding: 90°. If there are 200 students, how many preferred Data Analytics?", e: "NjA=" },

  // LEVEL – HARD
  { q: "In a batch of 200 students, 100 attended at least one workshop, 60 attended a data analytics workshop, and 30 attended both analytics and coding workshops. The probability that a randomly chosen workshop attendee attended both is x/y. What is y^x?", e: "MTAwMA==" },
  { q: "A line graph of SDC recruitment shows a consistent rise over each semester. What is the term for the general direction of the data?", e: "VHJlbmQ=" },
  { q: "A multiple-choice quiz has 2 questions, each with 4 options and only one correct. If a student guesses all, the probability of getting exactly 1 correct is x/y. What day is it on (y-x)th of this month?", e: "U3VuZGF5" },
  { q: "A trial where there are exactly two outcomes (like success or failure) is called a?", e: "QmVybm91bGxp" },
  { q: "The line graph below shows the number of hours spent by a person for his project over six consecutive days. LINE GRAPH (1). What is the day with hours spent closest to the average of total hours spent in the week?", e: "c2F0dXJkYXk=", chartLink: "https://drive.google.com/file/d/1eNpnalUwg8dyh2UPvfip3GwD0v7rlBKG/view?usp=sharing" },
  { q: "The club had 50 members last semester and 80 this semester. If it continues to grow at the same compound rate, how many members are expected next semester?", e: "MTI4" },
  { q: "The pie chart of SDC event attendance shows Hackathon = 108° and Workshop = 90°. The club reports 162 students attended Hackathon. How many students attended Workshops?", e: "MTM1" },
  { q: "The multi-line graph below depicts the F1 scores of 3 different models on 5 datasets. It is the only dataset where the average F1-score of the three models is below the combined average F1-score of models, Pulse and Core across all five datasets. MULTILINE GRAPH(1)", e: "c2VudGluZWw=", chartLink: "https://drive.google.com/file/d/12BIK3z7FcSZHdP11wJHrCwrfY1TxvkBx/view?usp=sharing" },
  { q: "Which model shows less than a 30% difference between its best and worst scores across all 5 datasets? MULTILINE graph (1)", e: "Zmx1eA==", chartLink: "https://drive.google.com/file/d/1eNpnalUwg8dyh2UPvfip3GwD0v7rlBKG/view?usp=sharing" },
];
// ===================== UTILITY =====================
function decodeAnswer(encoded) {
  try {
    return atob(encoded).toLowerCase();
  } catch {
    return "";
  }
}

// ===================== COMPONENT =====================
class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6],
  };

  constructor(props) {
    super(props);

    const userEmail = this.props.userEmail || "guest";
    const finishedEmails = JSON.parse(localStorage.getItem("finishedEmails")) || [];
    const saved = JSON.parse(localStorage.getItem(`save_${userEmail}`));

    this.state = {
      mistake: 0,
      guessed: new Set(),
      currentQuestion: 0,
      correctCount: 0,
      startTime: saved?.startTime || Date.now(),
      timeElapsed: saved?.timeElapsed || 0,
      timer: null,
      isGameOver: false,
      isGameWon: false,
      finishedEmails,
      alreadyPlayed: false, // ✅ added
    };

    if (saved && !finishedEmails.includes(userEmail)) {
      this.state = {
        ...this.state,
        ...saved,
        guessed: new Set(saved.guessed || []),
      };
    }
  }

  componentDidMount() {
    const { finishedEmails } = this.state;
    const userEmail = this.props.userEmail || "guest";

    // If finished earlier, lock them out instantly
    if (finishedEmails.includes(userEmail)) {
      this.setState({ isGameOver: true, isGameWon: false, alreadyPlayed: true });
      return;
    }

    // Timer start
    const timer = setInterval(() => {
      this.setState({
        timeElapsed: Math.floor((Date.now() - this.state.startTime) / 1000),
      });
    }, 1000);
    this.setState({ timer });

    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (event) => {
    const key = event.key?.toLowerCase();
    if ((key >= "a" && key <= "z") || (key >= "0" && key <= "9")) {
      this.handleGuess(key);
    }
  };

  guessedWord() {
    const answer = decodeAnswer(QUESTIONS[this.state.currentQuestion].e);
    return answer
      .split("")
      .map((ch) => (this.state.guessed.has(ch) ? ch : "_"))
      .join(" ");
  }

  saveState = () => {
    const userEmail = this.props.userEmail || "guest";
    if (this.state.isGameOver || this.state.isGameWon) {
      const finishedEmails = [...new Set([...this.state.finishedEmails, userEmail])];
      localStorage.setItem("finishedEmails", JSON.stringify(finishedEmails));
      localStorage.removeItem(`save_${userEmail}`);
      this.setState({ finishedEmails });
      return;
    }

    const saveData = {
      mistake: this.state.mistake,
      guessed: Array.from(this.state.guessed),
      currentQuestion: this.state.currentQuestion,
      correctCount: this.state.correctCount,
      startTime: this.state.startTime,
      timeElapsed: this.state.timeElapsed,
    };
    localStorage.setItem(`save_${userEmail}`, JSON.stringify(saveData));
  };

  submitToSpreadsheet = () => {
    const { correctCount, timeElapsed } = this.state;
    const userName = this.props.userName || "Player";
    const userEmail = this.props.userEmail || "";

    const SPREADSHEET_WEB_APP_URL =
      "https://script.google.com/macros/s/AKfycbxEYaBzMlbaUpgYXjDfWpyvEFmiEQ01JEAFoVTshnNdGG1DkJCxtnn0vpfRHEpSrh6D/exec";

    const formData = new URLSearchParams();
    formData.append("name", userName);
    formData.append("email", userEmail);
    formData.append("score", correctCount);
    formData.append("time", timeElapsed);

    fetch(SPREADSHEET_WEB_APP_URL, {
      method: "POST",
      body: formData,
    }).catch((err) => console.error("Error submitting:", err));
  };

  handleGuess = (letter) => {
    letter = letter.toLowerCase();
    const { currentQuestion, guessed, mistake, correctCount, isGameOver, isGameWon } = this.state;
    const answer = decodeAnswer(QUESTIONS[currentQuestion].e);

    if (isGameOver || isGameWon || guessed.has(letter)) return;

    const newGuessed = new Set(guessed);
    newGuessed.add(letter);
    const wrongGuess = !answer.includes(letter);
    const newMistake = Math.min(mistake + (wrongGuess ? 1 : 0), this.props.maxWrong);

    // Game lost
    if (newMistake >= this.props.maxWrong) {
      clearInterval(this.state.timer);
      this.setState(
        { guessed: newGuessed, mistake: newMistake, isGameOver: true },
        () => {
          this.submitToSpreadsheet();
          this.saveState();
        }
      );
      return;
    }

    const guessedAll = answer.split("").every((ch) => newGuessed.has(ch));
    if (guessedAll) {
      if (currentQuestion === QUESTIONS.length - 1) {
        clearInterval(this.state.timer);
        this.setState(
          { guessed: newGuessed, correctCount: correctCount + 1, isGameWon: true, isGameOver: true },
          () => {
            this.submitToSpreadsheet();
            this.saveState();
          }
        );
      } else {
        this.setState({ guessed: newGuessed, correctCount: correctCount + 1 }, () => {
          this.saveState();
        });
        setTimeout(() => this.nextQuestion(), 500);
      }
      return;
    }

    this.setState({ guessed: newGuessed, mistake: newMistake }, () => {
      this.saveState();
    });
  };

  nextQuestion = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      guessed: new Set(),
    });
  };

  generateButtons() {
    const { guessed, isGameOver, isGameWon } = this.state;
    const answer = decodeAnswer(QUESTIONS[this.state.currentQuestion].e);
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    return letters.map((l) => (
      <button
        key={l}
        value={l}
        onClick={() => this.handleGuess(l)}
        disabled={guessed.has(l) || isGameOver || isGameWon}
        className={guessed.has(l) ? (answer.includes(l) ? "correct" : "wrong") : ""}
      >
        {l.toUpperCase()}
      </button>
    ));
  }

  generateNumpad() {
    const { guessed, isGameOver, isGameWon } = this.state;
    const answer = decodeAnswer(QUESTIONS[this.state.currentQuestion].e);
    const numbers = "0123456789".split("");
    return numbers.map((n) => (
      <button
        key={n}
        value={n}
        onClick={() => this.handleGuess(n)}
        disabled={guessed.has(n) || isGameOver || isGameWon}
        className={guessed.has(n) ? (answer.includes(n) ? "correct" : "wrong") : ""}
      >
        {n}
      </button>
    ));
  }

  renderPopup() {
    const { isGameOver, isGameWon, timeElapsed, correctCount } = this.state;
    if (!isGameOver && !isGameWon) return null;

    return (
      <div className="result-overlay">
        <div className="result-card">
          <h2>{isGameWon ? "🎉 You Won!" : "💔 Game Over!"}</h2>
          <p>{isGameWon ? "Congratulations! You solved all questions." : "Better luck next time!"}</p>
          <div className="info-box" style={{ justifyContent: "center", margin: "1rem 0" }}>
            <span>Time: {timeElapsed}s</span>
            <span>Score: {correctCount}/{QUESTIONS.length}</span>
          </div>
        </div>
      </div>
    );
  }

 render() {
  const { mistake, currentQuestion, timeElapsed, correctCount, isGameOver, isGameWon, alreadyPlayed } = this.state;
  const { maxWrong, images } = this.props;

  if (alreadyPlayed) {
    return (
      <div className="Hangman-wrapper fade-in">
        <h1 className="Hangman-heading">GAME OVER</h1>
        <div className="already-played">
          <h2>⚠️ You’ve already played!</h2>
          <p>Thanks for participating. You cannot play again.</p>
        </div>
      </div>
    );
  }

  const question = QUESTIONS[currentQuestion].q;
  const answer = decodeAnswer(QUESTIONS[currentQuestion].e);
  const chartLink = QUESTIONS[currentQuestion].chartLink;

  return (
    <div className="Hangman-wrapper">
      {isGameWon && (
        <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />
      )}
      <h1 className="Hangman-heading">DO OR DIE</h1>
      <div className="Hangman">
        <div className="Hangman-left">
          <img src={images[Math.min(mistake, maxWrong)]} alt={`${mistake}/${maxWrong} wrong guesses`} />
          <div className="question-text">
            <p>{question}</p>
            {chartLink && (
              <a
                href={chartLink}
                target="_blank"
                rel="noopener noreferrer"
                className="chart-link"
              >
                Click to view chart 📊
              </a>
            )}
          </div>
          <div className="info-box">
            <span>Lives: {Math.max(0, maxWrong - mistake)}</span>
            <span>Time: {timeElapsed}s</span>
            <span>Score: {correctCount}/{QUESTIONS.length}</span>
          </div>
        </div>

        <div className="Hangman-right">
          <p className="Hangman-word">{!isGameOver ? this.guessedWord() : answer}</p>
          <div className="Hangman-btns">{this.generateButtons()}</div>
          <div className="Hangman-btns numpad">{this.generateNumpad()}</div>
        </div>
      </div>

      {this.renderPopup()}
    </div>
  );
}

}

export default Hangman;