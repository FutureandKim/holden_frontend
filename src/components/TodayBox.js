import React, { useState } from 'react';
import styled from 'styled-components';
import { TodayRecord } from '../api/auth/TodayRecord';

const Container = styled.div`
  width: 500px;
  margin-top: 50px;
  border: 1px solid #e3e3e3;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  z-index: 10;
  background: #fff;
  padding: 25px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 35px;
  margin-top: 20px;
  font-family: Pretendard-Bold;
`;

const Line = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 1px;
  background: #e6e6e6;
`;

const Form = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: column;
`;

const Label = styled.label`
  margin-top: 20px;
  color: #414141;
  font-size: 23px;
  font-family: Pretendard-Medium;
`;

const Input = styled.input`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  font-size: 20px;
`;

const Select = styled.select`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  font-size: 20px;
`;

const Option = styled.option`
  font-size: 20px;
`;

const Btn = styled.button`
  width: 100%;
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
`;

export default function CreateNew() {
  const [categoryList, setCategoryList] = useState([
    '아침',
    '점심',
    '저녁',
    '기타 활동',
  ]);
  // 사용자가 입력한 내용 추출
  const [category, setCategory] = useState(''); // 무엇을 했는지
  const [what, setWhat] = useState(''); // 무엇을 먹었는지
  const [who, setWho] = useState(''); // 누구랑 했는지
  const [where, setWhere] = useState(''); // 어디서 했는지

  const handleUserInput = async () => {
    try {
      const now = new Date();
      const today = now.toISOString().split('T')[0]; // YYYY-MM-DD
      const whatTime = now.toTimeString().split(' ')[0]; // HH:MM:SS

      const data = {
        today,
        category,
        whatIs: what,
        whoIs: who,
        whereIs: where,
        whatTime,
      };

      const response = await TodayRecord(data);
      console.log('Record created successfully:', response);
    } catch (error) {
      console.error('Failed to create record:', error);
    }
  };

  return (
    <>
      <Container>
        <Title>하루 기록하기</Title>
        <Line />
        <Form>
          <Label>무엇을 했나요?</Label>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <Option value='' disabled>
              카테고리를 선택하세요
            </Option>
            {categoryList.map((cat) => (
              <Option key={cat} value={cat}>
                {cat}
              </Option>
            ))}
          </Select>
          <Label>무엇을 했나요? / 무슨 음식을 먹었나요?</Label>
          <Input
            type='text'
            value={what}
            onChange={(e) => setWhat(e.target.value)}
          />
          <Label>누구랑 했나요?</Label>
          <Input
            type='text'
            value={who}
            onChange={(e) => setWho(e.target.value)}
          />
          <Label>어디서 했나요?</Label>
          <Input
            type='text'
            value={where}
            onChange={(e) => setWhere(e.target.value)}
          />
          <Line />
          <Btn onClick={handleUserInput}>기록하기</Btn>
        </Form>
      </Container>
    </>
  );
}
