import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Strong = styled.strong`
  font-weight: bold;
  font-size: 20px;
  margin-right: 30px;
`;

const ShowSomeDay = ({ date }) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
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

    if (date) {
      fetchRecords();
    }
  }, [date]);

  return (
    <div>
      <div>
        {records.length > 0 ? (
          records.map((record) => (
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
          ))
        ) : (
          <p style={{"fontSize": "25px"}}>기록이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default ShowSomeDay;
