import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Strong = styled.strong`
  font-weight: bold;
  font-size: 20px;
`;


const ShowTodayRecord = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const date = new Date().toISOString().split('T')[0]; // 현재 날짜 (YYYY-MM-DD)
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/record?date=${date}`,
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
              border: '1px solid #ccc',
              padding: '10px',
              margin: '10px 0',
            }}
          >
            <p>
              <Strong>일정 </Strong> {record.category}
            </p>
            <p>
              <Strong>무엇 </Strong> {record.whatIs}
            </p>
            <p>
              <Strong>누구 </Strong> {record.whoIs}
            </p>
            <p>
              <Strong>어디 </Strong> {record.whereIs}
            </p>
            <p>
              <Strong>시간 </Strong> {record.whatTime}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowTodayRecord;
