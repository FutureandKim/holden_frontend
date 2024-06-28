import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { ShowQuiz } from '../api/ShowQuiz';

const Container = styled.div`
  margin: 0 17% 0 17%;
`;

const PageName = styled.div`
  font-size: 30px;
  margin-top: 40px;
  font-family: Pretendard-Medium;
`;

const QuizContainer = styled.div`
  margin-top: 50px;
  border: 1px solid #e3e3e3;
  border-radius: 12px;
  padding: 20px;
`;

const QuizText = styled.div`
  font-size: 27px;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const Answer = styled.div`
  display: flex;
  justify-content: center;
  width: 140px;
  height: 40px;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 25px;
  border-radius: 12px;
  border: 1px solid #e3e3e3;
  color: ${(props) => (props.selected ? '#fff' : '#000')};
  background-color: ${(props) => (props.selected ? '#2b5f88' : '#fff')};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  align-items: center;
`;

const ResultText = styled.div`
  font-size: 20px;
  margin-top: 10px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const NextButton = styled.button`
  border: none;
  padding: 10px 20px;
`;

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizFin, setQuizFin] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await ShowQuiz();
        setQuizData(data);
        setSelectedAnswers(new Array(data.length).fill(''));
      } catch (error) {
        console.error('Failed to fetch quiz:', error);
        setQuizData([]);
      }
    };

    fetchQuiz();
  }, []);

  const handleAnswerClick = (optionIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuizIndex] =
      quizData[currentQuizIndex][`option${optionIndex + 1}`];
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNextQuiz = () => {
    if (currentQuizIndex < quizData.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setShowResult(false);
    } else {
      setQuizFin(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedAnswers(new Array(quizData.length).fill(''));
    setQuizFin(false);
    setShowResult(false);
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  if (quizData.length === 0) {
    return (
      <>
        <Header />
        <Container>
          <PageName>하루 퀴즈</PageName>
          <QuizContainer>
            <QuizText>아직 기록이 부족해요</QuizText>
          </QuizContainer>
        </Container>
      </>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <PageName>하루 퀴즈</PageName>
        <QuizContainer>
          {!quizFin ? (
            <>
              <QuizText>{quizData[currentQuizIndex]?.quiz}</QuizText>
              <AnswerContainer>
                {[0, 1, 2].map((optionIndex) => (
                  <Answer
                    key={optionIndex}
                    onClick={() => handleAnswerClick(optionIndex)}
                    selected={
                      selectedAnswers[currentQuizIndex] ===
                      quizData[currentQuizIndex][`option${optionIndex + 1}`]
                    }
                  >
                    {quizData[currentQuizIndex][`option${optionIndex + 1}`]}
                  </Answer>
                ))}
              </AnswerContainer>
              {showResult && selectedAnswers[currentQuizIndex] && (
                <ResultText>
                  정답: {quizData[currentQuizIndex].rightAnswer}
                </ResultText>
              )}
              {!showResult && (
                <button onClick={handleShowResult}>정답 확인</button>
              )}
              <NextButton onClick={handleNextQuiz}>다음 문제</NextButton>
            </>
          ) : (
            <>
              <QuizText>모든 퀴즈를 완료했습니다!</QuizText>
              <NextButton onClick={handleResetQuiz}>다시 풀기</NextButton>
            </>
          )}
        </QuizContainer>
      </Container>
    </>
  );
};

export default Quiz;
