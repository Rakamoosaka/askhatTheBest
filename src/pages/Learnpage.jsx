import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/learnPage.module.css";

const LearnPage = () => {
  // State to manage the current stage
  const [stage, setStage] = useState("video"); // "video", "quiz", "finish"
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate(); // Hook for navigation

  // Array of questions with images and answers
  const questions = [
    {
      question: "Вопрос: жесткий камень, ваше йоу?",
      answers: ["Кремень", "Мрамор", "Гранит", "Кварц"],
      image: "./images.jpg", // Example image for the question
    },
    {
      question: "Что использовали для разжигания огня?",
      answers: ["Дерево", "Кремень", "Сено", "Металл"],
      image: "./images (1).jpg",
    },
    {
      question: "Какой материал использовался для создания инструментов?",
      answers: ["Кремень", "Бронза", "Сталь", "Глина"],
      image: "./images (2).jpg",
    },
    {
      question: "Как назывался период древней истории?",
      answers: ["Палеолит", "Неолит", "Мезолит", "Железный век"],
      image: "./images (3).jpg",
    },
    {
      question: "Какая река была важна для древних цивилизаций?",
      answers: ["Амударья", "Енисей", "Волга", "Сырдарья"],
      image: "./images (4).jpg",
    },
  ];

  // Finish page image
  const finishImage = "./images (5).jpg";

  // Handle button click for video completion
  const handleVideoComplete = () => {
    setStage("quiz");
  };

  // Handle answer click
  const handleAnswerClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setProgress(((currentQuestionIndex + 1) / questions.length) * 100);
    } else {
      setStage("finish");
    }
  };

  // Handle "Супер!" button click
  const handleFinish = () => {
    navigate("/main"); // Replace "/another-page" with your desired route
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <img src="/logoSimple.svg" alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>6 класс - Палеолит</h1>
      </header>

      {/* Conditional Rendering */}
      {stage === "video" && (
        <div className={styles.section}>
          <h2 className={styles.question}>На этом уроке узнаете:</h2>
          <video
            controls
            className={styles.video}
            src="/path-to-your-video.mp4"
          >
            Your browser does not support the video tag.
          </video>
          <button
            onClick={handleVideoComplete}
            className={styles.learnButton}
          >
            Перейти к викторине
          </button>
        </div>
      )}

      {stage === "quiz" && (
        <div className={styles.section}>
          {/* Progress Bar */}
          <div className={styles.progressContainer}>
            <div
              className={styles.progressBar}
              style={{ width: `${progress}%` }}
            >
              {Math.round(progress)}%
            </div>
          </div>

          {/* Quiz Question */}
          <h2 className={styles.question}>
            {questions[currentQuestionIndex].question}
          </h2>

          {/* Quiz Content */}
          <div className={styles.quizContent}>
            {/* Question Image */}
            <div className={styles.quizImage}>
              <img
                src={questions[currentQuestionIndex].image}
                alt="Question illustration"
                className={styles.image}
              />
            </div>

            {/* Answer Buttons */}
            <div className={styles.answerButtons}>
              {questions[currentQuestionIndex].answers.map((answer, index) => (
                <button
                  key={index}
                  className={styles.answerButton}
                  onClick={handleAnswerClick}
                >
                  {answer}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {stage === "finish" && (
        <div className={styles.section}>
          <h2 className={styles.question}>Так держать!</h2>
          <p className={styles.subText}>
            Каждый день смотри видео, практикуйся, учи даты, чтобы развивать свой прогресс.
          </p>
          {/* Image container */}
          <div className={styles.quizImage}>
            <img
              src={finishImage}
              alt="Congratulations"
              className={styles.image}
            />
          </div>
          <button
            className={styles.learnButton}
            onClick={handleFinish} // Navigate to another page
          >
            Супер!
          </button>
        </div>
      )}
    </div>
  );
};

export default LearnPage;
