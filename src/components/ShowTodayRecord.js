import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Strong = styled.strong`
  font-weight: bold;
  font-size: 20px;
  margin-right: 30px;
`;


const ShowTodayRecord = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const date = new Date().toISOString().split('T')[0]; // 현재 날짜 (YYYY-MM-DD)
      try {
        const response = await axios.get(
          `/record?date=${date}`,
          {
            headers: {
              Authorization: `${localStorage.getItem('accessToken')}`,
            },
          }
        );
        setRecords(response.data.result);
      } catch (error) {
        console.error('기록을 가져오는 데 실패했습니다:', error);
      }
    };

    fetchRecords();
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행

  return (
    <div>
      <div>
        {records.map((record) => (
          <div
            key={record.id}
            style={{
              padding: '10px 10px 10px 30px',
              margin: '10px 0',
              borderRadius: '20px',
              boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.10)',
            }}
          >
            <p style={{"fontSize": "20px"}}>
              <Strong>일정 </Strong> {record.category}
            </p >
            <p style={{"fontSize": "20px"}}>
              <Strong>무엇 </Strong> {record.whatIs}
            </p>
            <p style={{"fontSize": "20px"}}>
              <Strong>누구 </Strong> {record.whoIs}
            </p>
            <p style={{"fontSize": "20px"}}>
              <Strong>어디 </Strong> {record.whereIs}
            </p>
            <p style={{"fontSize": "20px"}}>
              <Strong>시간 </Strong> {record.whatTime}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowTodayRecord;
