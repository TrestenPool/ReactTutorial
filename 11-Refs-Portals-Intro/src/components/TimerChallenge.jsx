import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  /*************************/
  /********* REF **********/
  /*************************/
  const timer = useRef(); // using to keep a reference on the timer we start/stop
  const dialog = useRef();

  /**************************/
  /********* State **********/
  /**************************/
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  // DERIVED STATE
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // the timer is past done. Resets the timer
  if (timeRemaining <= 0) {
    clearInterval(timer.current); // stop timer
    dialog.current.showModal(); // show the modal in the resultmodal
  }

  /******************************/
  /********* FUNCTIONS **********/
  /******************************/
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current); // stop timer
    dialog.current.showModal(); // show modal
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  /******************************/
  /********** JSX CODE **********/
  /******************************/
  return (
    <>
      {/* display the result modal */}
      <ResultModal
        ref={dialog}
        result="lost"
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      {/* display the results */}
      <section className="challenge">
        <h2>{title}</h2>

        {timerIsActive && <p>You lost!</p>}

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {!timerIsActive ? "Start" : "Stop"} Challenge
          </button>
        </p>

        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
