import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Container = styled.div`
  margin: 0 17% 0 17%;
`;

const PageName = styled.div`
  font-size: 30px;
  margin-top: 40px;
  font-family: Pretendard-Medium;
`;
const Text = styled.div`
  font-size: 27px;
  margin-top: 50px;
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
  width: 100px;
  height: 100px;
  padding: 20px;
  font-size: 25px;
  border-radius: 12px;
  border: 1px solid #e3e3e3;
  color: #fff;
  background-color: #2b5f88;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  align-items: center;
`;

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);

  return (
    <>
      <Header />
      <Container>
        <PageName>하루 퀴즈</PageName>
        
      </Container>
    </>
  );
};

export default Quiz;
