import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const Question = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();



  useEffect(() => {
    const findCheckedInput =
      radiosWrapper.current.querySelectorAll("input:checked");
    if (findCheckedInput === 0) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    const findCheckedInput =
      radiosWrapper.current.querySelectorAll("input:checked");
    setSelected(findCheckedInput);
    if (error) {
      setError(e.target.value);
    }
  };

  const nextClickHandler = (e) => {

    let elems = Array.from(document.querySelectorAll(".checbox"));

    elems.map((elem) => elem.checked = false);

    if (selected === []) {
      return setError("Please select one option!");
    }

    const answerSelected = Array.from(selected);

    let answerdata = data.choices.filter((elem, index) => answerSelected.some((e, i) => index == e.id));


    let f = data.choices.filter((elem) => answerdata.some(e => elem == e));


    let matched = f.map((elem) => data.answer.some(e => elem == e));


    let checkAnswer = matched.every(elem => elem === true);


    if (checkAnswer) {
      data.userAnswer = true;
    }
    else {
      data.userAnswer = false;
    }


    onAnswerUpdate((prevState) => [
      ...prevState,

      data,
    ]);

    setSelected("");

    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);

    } else {
      onSetStep(3);
    }
  };


  return view();



  function view() {
    return <div className="card">
      <div className="card-content">
        <div className="content">
          <h2 className="mb-5">{data.question}</h2>
          <div className="control" ref={radiosWrapper}>
            {data.choices.map((choice, i) => (
              <label className="radio has-background-light" key={i}>
                <input
                  type="checkbox"
                  name="answer"
                  className="checbox"
                  value={choice}
                  id={i}
                  onChange={changeHandler}
                />
                {choice}
              </label>

            ))}

          </div>

          {error && <div className="has-text-danger">{error}</div>}
          <button
            className="button is-link is-medium is-fullwidth mt-4"
            onClick={nextClickHandler}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  }
};

export default Question;
