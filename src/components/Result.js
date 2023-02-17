const Result = ({ introvert, extrovert }) => {
  return (
    <>
      <div className="flex justify-center text-center py-30">
        <p className="text-2xl font-bold underline">
          {`You're most likely an ${
            extrovert > introvert ? "Extrovert🚀" : "Introvert📚"
          }`}
          .
        </p>
      </div>
      <div className="flex justify-center text-center py-4">
        <p>
          {`Your score is extrovert: ${extrovert} and introvert: ${introvert}`}
        </p>
      </div>
    </>
  );
};

export default Result;
