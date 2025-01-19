import { useState } from "react";
import styles from "./SliderCheckbox.module.css";

const SliderCheckbox = () => {
    const [isToggled, setIsToggled] = useState(false);

    const toggleSlider = () => {
        setIsToggled((prevState) => !prevState);
    };
    return (
        <div
            className={`${styles.slider} ${isToggled ? styles.sliderOn : ""}`}
            onClick={toggleSlider}
        >
            <div
                className={`${styles.knob} ${isToggled ? styles.knobOn : ""}`}
            ></div>
        </div>
    );
};

export default SliderCheckbox;
