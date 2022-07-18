const Timer = ({ minutes, minutesDisplay, seconds, secondsDisplay }) => {
    let timerTimeOut;

    const updateDisplay = (newMinutes, seconds) => {
        newMinutes = newMinutes === undefined ? minutes : newMinutes;

        minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
        secondsDisplay.textContent = String(seconds).padStart(2, "0");
    };

    const updateMinutes = (newMinutes) => {
        minutes = newMinutes;
    };
    const resetTimer = () => {
        clearTimeout(timerTimeOut);
        updateDisplay(minutes, seconds);
    };

    const countDown = () => {
        timerTimeOut = setTimeout(() => {
            let minutes = minutesDisplay.textContent;
            let seconds = secondsDisplay.textContent;

            if (minutes <= 0 && seconds <= 0) {
                resetTimer();
                return;
            }

            if (seconds <= 0) {
                seconds = 60;

                --minutes;
            }

            updateDisplay(minutes, seconds - 1);
            countDown();
        }, 1000);
    };

    return { updateDisplay, updateMinutes, resetTimer, countDown };
};

export default Timer;
