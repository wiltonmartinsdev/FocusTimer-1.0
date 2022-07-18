import {
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonStop,
    buttonIncrease,
    buttonDecrease,
    buttonForest,
    buttonRain,
    buttonCoffeShop,
    buttonFirePlace,
} from "./elements.js";

const Buttons = ({ timer, events, sounds }) => {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);
    let newMinutes;

    buttonPlay.addEventListener("click", () => {
        timer.countDown();
    });

    buttonStop.addEventListener("click", () => {
        timer.resetTimer();
    });

    buttonIncrease.addEventListener("click", () => {
        timer.updateDisplay((minutes += 5), seconds);
        newMinutes = minutes;
        timer.updateMinutes(newMinutes);
    });

    buttonDecrease.addEventListener("click", () => {
        if (minutes > 5) {
            timer.updateDisplay((minutes -= 5), seconds);
            newMinutes = minutes;
            timer.updateMinutes(newMinutes);
        }
    });

    buttonForest.addEventListener("click", () => {
        events.Forest();
        sounds.Forest.play();
        sounds.Rain.pause();
        sounds.CoffeShop.pause();
        sounds.FirePlace.pause();
    });

    buttonRain.addEventListener("click", () => {
        events.Rain();
        sounds.Rain.play();
        sounds.Forest.pause();
        sounds.CoffeShop.pause();
        sounds.FirePlace.pause();
    });

    buttonCoffeShop.addEventListener("click", () => {
        events.CoffeShop();
        sounds.CoffeShop.play();
        sounds.Forest.pause();
        sounds.Rain.pause();
        sounds.FirePlace.pause();
    });

    buttonFirePlace.addEventListener("click", () => {
        events.FirePlace();
        sounds.FirePlace.play();
        sounds.Forest.pause();
        sounds.Rain.pause();
        sounds.CoffeShop.pause();
    });
};

export default Buttons;
