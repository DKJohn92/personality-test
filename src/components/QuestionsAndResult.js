import { useState } from "react";
import { QuestionsAndAnswers } from "../Mockdata/question-answer";
import Answer from "./Answer";
import Result from "./Result";
import Question from "./Question";

const QuestionsAndResult = () => {
  const [isActive, setIsActive] = useState(0);
  const [introvert, setIntrovert] = useState(0);
  const [extrovert, setExtrovert] = useState(0);
  const onAnswerClick = (indicator) => {
    if (isActive <= Object.values(QuestionsAndAnswers).length - 1) {
      setIsActive((prev) => prev + 1);
    }
    if (indicator === 0) {
      setIntrovert((prev) => prev + 1);
    } else {
      setExtrovert((prev) => prev + 1);
    }
  };
  return (
    <div>
      {Object.values(QuestionsAndAnswers).map((questionAndAnswers, index) => {
        return (
          <div key={index}>
            {isActive === index && (
              <>
                <Question question={questionAndAnswers.question} />
                <div className="py-10">
                  {Object.values(questionAndAnswers.answers).map(
                    (answers, index) => {
                      return (
                        <div
                          key={index}
                          data-cy={`answer-${index}`}
                          onClick={() => onAnswerClick(answers.indicator)}
                        >
                          <Answer answer={answers.answer} />
                        </div>
                      );
                    }
                  )}
                </div>
              </>
            )}
          </div>
        );
      })}
      {Object.values(QuestionsAndAnswers).length === isActive && (
        <Result introvert={introvert} extrovert={extrovert} />
      )}
    </div>
  );
};

export default QuestionsAndResult;
