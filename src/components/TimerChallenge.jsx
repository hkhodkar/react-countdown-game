import { useState, useRef } from "react"


export default function TimerChallenge({title, targetTime}) {
    const [timeStarted, setTimeStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const timer = useRef();

    function handleStartTimer() {
        timer.current = setTimeout( () => {
            setTimerExpired(true);
        } , targetTime * 1000)
        setTimeStarted(true);
    }

    function handleStopTimer() {
        clearTimeout(timer.current);
        setTimeStarted(false);
    }


    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={ timeStarted ? handleStopTimer : handleStartTimer}>
                    {timeStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className="">
               {timeStarted ? 'Time is running... ' :  'Timer inactive'} 
            </p>
        </section>
    )
}