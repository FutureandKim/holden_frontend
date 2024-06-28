import React from 'react';
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
  margin-top: 100px;
`;

//가로배열
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LeftContainer = styled.div`
  width: 50%;
`;

const RightContainer = styled.div`
  width: 50%;
`;

const Date = styled.input`
  font-size: 25px;
  margin-top: 15px;
  width: 80%;
  border: 1px solid #e3e3e3;
  padding: 10px;
`;

const FindBtn = styled.button`
  width: 340px;
  height: 70px;
  margin-top: 20px;
  padding: 15px 20px;
  font-size: 25px;
  border-radius: 12px;
  border: 1px solid #e3e3e3;
  color: #fff;
  background-color: #2b5f88;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  align-items: center;
`;

const Day = () => {
  return (
    <>
      <Header />
      <Container>
        <PageName>하루 기록하기</PageName>
        <Div>
          <LeftContainer>
            <Text>다른 날에는 무슨일이 있었을까요?</Text>
            <Date type='date' />
            <FindBtn>찾아보기</FindBtn>
          </LeftContainer>
          <RightContainer>
            <Text>오늘의 기록을 써보세요</Text>
          </RightContainer>
        </Div>
      </Container>
    </>
  );
};

export default Day;
