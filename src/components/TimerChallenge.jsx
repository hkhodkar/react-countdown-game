import { useState, useRef, Fragment } from "react"
import ResultModal from "./ResultModal";


export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open(); 
    }

    function handleResetTimer() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStartTimer() {
        timer.current = setInterval(() => {
            setTimeRemaining(prev => prev - 10);
        }, 10)
    }

    function handleStopTimer() {
        clearInterval(timer.current);
        dialog.current.open();
    }


    return (
        <Fragment>
            <ResultModal 
            targetTime={targetTime} 
            remainingTime={timeRemaining} 
            ref={dialog}
            onReset={handleResetTimer} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStopTimer : handleStartTimer}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className="">
                    {timerIsActive ? 'Time is running... ' : 'Timer inactive'}
                </p>
            </section>
        </Fragment>
    )
}