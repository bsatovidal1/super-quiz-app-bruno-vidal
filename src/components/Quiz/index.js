import React, { useEffect, useState } from 'react';
import { Progressbar } from '../Progressbar';
import {
  Button,
  ButtonContainer,
  Container,
  ImageTimerPair,
  QuestionAnswersPair,
  QuestionContainer,
  QuestionImage,
  ScoreText,
} from './style';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState({
    imageUrl: '',
    question: '',
    options: [],
    answer: -1,
    time: 10,
  });
  const [activeIdx, setActiveIdx] = useState(0);
  const [questionTimer, setQuestionTimer] = useState(10);
  const [selectedButtonIdx, setSelectedButtonIdx] = useState(-1);
  const [buttonStyle, setButtonStyle] = useState([]);
  const [score, setScore] = useState(0);
  const [displayScore, setDisplayScore] = useState(false);

  useEffect(() => {
    fetch('https://scs-interview-api.herokuapp.com/questions')
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        setActiveQuestion(data[activeIdx]);
        setButtonStyle(new Array(data[activeIdx].options.length));
      })
      .catch((error) => console.log(error.message));
  }, []);

  function handleCorrectAnswerVerification() {
    buttonStyle[activeQuestion.answer] = { backgroundColor: '#029E40' };

    if (selectedButtonIdx === activeQuestion.answer) {
      setScore(() => score + 1);
    } else {
      buttonStyle[selectedButtonIdx] = { backgroundColor: 'red' };
    }
    setButtonStyle(() => [...buttonStyle]);
  }

  // QuestionTimer
  useEffect(() => {
    if (questionTimer > 0) {
      setTimeout(() => {
        setQuestionTimer(() => questionTimer - 1);
      }, 1000);
    } else {
      handleCorrectAnswerVerification();
      // setTimeout for answer verification
      setTimeout(() => {
        setQuestionTimer(() => 10);
        setSelectedButtonIdx(() => -1);
        const nextQuestion = questions[activeIdx + 1];
        if (nextQuestion) {
          setActiveQuestion(() => nextQuestion);
          setButtonStyle(() => new Array(nextQuestion?.options?.length || 4));
          setActiveIdx(() => activeIdx + 1);
        } else setDisplayScore(true);
      }, 3000);
    }
  }, [questionTimer]);

  const handleAnswerChoice = (idx) => {
    if (selectedButtonIdx === -1) {
      buttonStyle[idx] = { backgroundColor: '#38065E' };
      setSelectedButtonIdx(() => idx);
      setButtonStyle(() => [...buttonStyle]);
    }
  };

  return (
    <Container>
      {displayScore ? (
        <ScoreText>
          <h1>Score</h1>
          <p>
            You got a score of {score} out of {questions.length}
          </p>
        </ScoreText>
      ) : (
        <div>
          <h1>Quiz</h1>
          <QuestionContainer>
            <ImageTimerPair>
              <QuestionImage src={activeQuestion.imageUrl} />
              <Progressbar progress={questionTimer} />
            </ImageTimerPair>
            <QuestionAnswersPair>
              <h2>{activeQuestion.question}</h2>
              {activeQuestion.options.map((option, idx) => (
                <ButtonContainer key={idx}>
                  <Button onClick={() => handleAnswerChoice(idx)} style={buttonStyle[idx] || {}}>
                    {option}
                  </Button>
                </ButtonContainer>
              ))}
            </QuestionAnswersPair>
          </QuestionContainer>
        </div>
      )}
    </Container>
  );
}
