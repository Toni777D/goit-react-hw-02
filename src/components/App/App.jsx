import { useState, useEffect} from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification"



export default function App() {
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
    
    useEffect(() => {
        const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
        if (savedFeedback) {
          setFeedback(savedFeedback);
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
      }, [feedback]);
  
    function updateFeedback(feedbackType) {
        setFeedback(prevFeedback => ({
          ...prevFeedback,
          [feedbackType]: prevFeedback[feedbackType] + 1,
        }));
      }

      const resetFeedback = () => {
        setFeedback({good: 0, neutral: 0, bad: 0})
      }

      const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
      const positivePercentage = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

    return (
      <div className="App">
        <Description/>
        <Options updateFeedback={updateFeedback}  totalFeedback={totalFeedback} resetFeedback={resetFeedback}/>
        {totalFeedback > 0 ? (
            <Feedback feedback={feedback} totalFeedback={totalFeedback} positivePercentage={positivePercentage}/>) : (<Notification message="No feedback yet" />)}
      </div>
    );

  }
  
 
  
  
  


