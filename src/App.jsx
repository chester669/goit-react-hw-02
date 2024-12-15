import React, { useState, useEffect } from "react";
import "./App.css";
import Options from "./assets/components/Options/Options";
import Feedback from "./assets/components/Feedback/Feedback";
import Notification from "./assets/components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => {
      let updatedFeedback = { ...prevFeedback };
      if (feedbackType === "reset") {
        updatedFeedback = { good: 0, neutral: 0, bad: 0 };
      } else {
        updatedFeedback[feedbackType] += 1;
      }
      localStorage.setItem("feedback", JSON.stringify(updatedFeedback));
      return updatedFeedback;
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div className="app-container">
      <h1 className="app-header">Sip Happens Café</h1>
      <p className="app-description">
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>

      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />

      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
