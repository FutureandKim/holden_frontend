import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import ShowTodayRecord from '../components/ShowTodayRecord';
import ShowSomeDay from '../components/ShowSomeDay'; // Import ShowSomeDay component

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

const DateInput = styled.input`
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
  const [selectedDate, setSelectedDate] = useState('');
  const [showRecords, setShowRecords] = useState(false); // State to toggle showing records

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleFindBtnClick = () => {
    setShowRecords(true); // Show records when button is clicked
  };

  return (
    <>
      <Header />
      <Container>
        <PageName>하루 기록하기</PageName>
        <Div>
          <LeftContainer>
            <Text>다른 날에는 무슨일이 있었을까요?</Text>
            <DateInput
              type='date'
              value={selectedDate}
              onChange={handleDateChange}
            />
            <FindBtn onClick={handleFindBtnClick}>찾아보기</FindBtn>
          </LeftContainer>
          <RightContainer>
            {showRecords && ( // Render ShowSomeDay only if showRecords is true
              <>
                <Text>선택한 날짜의 기록</Text>
                <ShowSomeDay date={selectedDate} /> {/* Pass selectedDate to ShowSomeDay */}
              </>
            )}
            {!showRecords && (
              <>
                <Text>오늘 기록</Text>
                <ShowTodayRecord />
              </>
            )}
          </RightContainer>
        </Div>
      </Container>
    </>
  );
};

export default Day;
