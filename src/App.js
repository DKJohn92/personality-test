import { useState } from "react";
import Intro from "./components/Intro";
import Questions from "./components/Questions";
// Idea -> Safe the Introvert and Extrovert Answer in an Array and decide on Result depending on the score of Intro or Extrovert answers
const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const onButtonClick = () => {
    setQuizStarted(true);
  };
  return (
    <div className="bg-[#e6ffff] h-screen w-screen">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold py-10" data-cy="h1">
          Personality Test
        </h1>
      </div>
      {!quizStarted && <Intro onButtonClick={onButtonClick} />}
      {quizStarted && <Questions />}
    </div>
  );
};

export default App;
