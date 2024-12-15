import React from "react";
import styles from "./Feedback.module.css";

function Feedback({ good, neutral, bad }) {
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <div className={styles.statsContainer}>
      <h3 className={styles.header}>Feedback Stats</h3>
      <p className={styles.stat}>Good: {good}</p>
      <p className={styles.stat}>Neutral: {neutral}</p>
      <p className={styles.stat}>Bad: {bad}</p>
      <p className={styles.stat}>Total: {totalFeedback}</p>
      <p className={styles.stat}>
        Positive: {totalFeedback > 0 ? `${positiveFeedback}%` : "0%"}
      </p>
    </div>
  );
}

export default Feedback;
