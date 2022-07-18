const ambientEvent = ({
    buttonForest,
    buttonRain,
    buttonCoffeShop,
    buttonFirePlace,
}) => {
    const Forest = () => {
        buttonForest.classList.add("show");
        buttonRain.classList.remove("show");
        buttonCoffeShop.classList.remove("show");
        buttonFirePlace.classList.remove("show");
    };

    const Rain = () => {
        buttonForest.classList.remove("show");
        buttonRain.classList.add("show");
        buttonCoffeShop.classList.remove("show");
        buttonFirePlace.classList.remove("show");
    };

    const CoffeShop = () => {
        buttonForest.classList.remove("show");
        buttonRain.classList.remove("show");
        buttonCoffeShop.classList.add("show");
        buttonFirePlace.classList.remove("show");
    };

    const FirePlace = () => {
        buttonForest.classList.remove("show");
        buttonRain.classList.remove("show");
        buttonCoffeShop.classList.remove("show");
        buttonFirePlace.classList.add("show");
    };

    return { Forest, Rain, CoffeShop, FirePlace };
};

export default ambientEvent;
