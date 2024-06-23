import styles from "./feedback.module.css"

export default function Feedback({feedback,totalFeedback,positivePercentage}){
    return (
        <div className={styles.feedbackWrap}>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>Total feedback: {totalFeedback}</p>
        <p>Posistive feedback: {positivePercentage}%</p>
      </div>
    );
}
  