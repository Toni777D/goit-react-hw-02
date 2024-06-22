// import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

export default function App(){
// const [clicks, setClicks] = useState(0)
//     const updateFeedback = feedbackType => {
//         setClicks(clicks + 1);
//         };
        
    return (
        <>
        <Description/>
        <Options/>
        <Feedback/>
        </>
    )
}