const Intro = ({ onButtonClick }) => {
  return (
    <>
      <main className="flex justify-center py-10 text-center">
        <p className="text-2xl">
          Find out if you're an introvert or extrovert by answering a few simple
          questions!🧠📚
        </p>
      </main>
      <div className="flex justify-center py-32">
        <button
          onClick={onButtonClick}
          className="border-2 border-[#009999] rounded-md p-4"
        >
          Start Quiz
        </button>
      </div>
    </>
  );
};

export default Intro;
