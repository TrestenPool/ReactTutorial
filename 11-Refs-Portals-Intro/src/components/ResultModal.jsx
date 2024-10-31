import { forwardRef, useImperativeHandle, useRef } from "react";

/*
  This is the result modal that will display when the timer runs out and 
  lets the user know if they won or not.
*/
const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  // our ref
  ref
) {
  /***********************************/
  /********* DERIVING STATE **********/
  /***********************************/
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  // ref used to reference the dialog
  const dialog = useRef();

  // calculate the score
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  /******************************/
  /********* FUNCTIONS **********/
  /******************************/
  useImperativeHandle(ref, () => {
    return {
      showModal() {
        dialog.current.showModal();
      },
    };
  });

  /******************************/
  /********** JSX CODE **********/
  /******************************/
  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime}</strong>
        seconds left.
      </p>

      <form method="dialog" onClick={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
