import styles from "./options.module.css";
import { useState } from "react";

export default function Options(){
    const [clicksGood, setClicksGood] = useState(0);
    const [clicksNeutral, setClicksNeutral] = useState(0);
    const [clicksBad, setClicksBad] = useState(0);
    const [clicksReset, setClicksReset] = useState(false);

    const updateFeedback = feedbackType => {
        setClicks(clicks + 1);
        };
    return (
        <div className={styles.optionsWrap}>
            <button onClick={updateFeedback}>Good {clicksGood}</button>
            {}
            <button onClick={updateFeedback}>Neutral {clicksNeutral}</button>
            <button onClick={updateFeedback}>Bad {clicksBad}</button>
            <button onClick={updateFeedback}>Reset {clicksReset}</button>
        </div>
    )
}