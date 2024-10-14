import {useState, useRef} from 'react'
import ResultModal from './ResultModal';

export default function TimerChallenge({title, targetTime}) {
  // REF
  const timer = useRef();
  const dialog = useRef();

  // STATE
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  // FUNCTIONS
  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      console.dir(dialog.current);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  // JSX
  return (
    <>
      <ResultModal ref={dialog} result="lost" targetTime={targetTime} />

      <section className="challenge">
        <h2>{title}</h2>

        {timerExpired && <p>You lost!</p>}

        <p className='challenge-time'>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>

        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {!timerStarted ? 'Start' : 'Stop'} Challenge
          </button>
        </p>

        <p className={timerStarted ? 'active': undefined}>
          {timerStarted ? 'Timer is running' : 'Timer inactive'}
        </p>
      </section>
    </>
  )
}