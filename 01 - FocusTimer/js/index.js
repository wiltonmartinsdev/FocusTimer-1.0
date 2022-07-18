import Timer from "./timer.js";
import ambientEvent from "./ambientEvent.js";
import Sounds from "./sounds.js";
import Buttons from "./buttons.js";
import {
    minutesDisplay,
    secondsDisplay,
    buttonForest,
    buttonRain,
    buttonCoffeShop,
    buttonFirePlace,
} from "./elements.js";

let minutes = Number(minutesDisplay.textContent);
let seconds = Number(secondsDisplay.textContent);

const timer = Timer({
    minutes,
    minutesDisplay,
    seconds,
    secondsDisplay,
});

const events = ambientEvent({
    buttonForest,
    buttonRain,
    buttonCoffeShop,
    buttonFirePlace,
});

const sounds = Sounds();

Buttons({ timer, events, sounds });
