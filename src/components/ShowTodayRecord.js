import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
              <strong>카테고리:</strong> {record.category}
            </p>
            <p>
              <strong>무엇인가:</strong> {record.whatIs}
            </p>
            <p>
              <strong>누구인가:</strong> {record.whoIs}
            </p>
            <p>
              <strong>어디에서:</strong> {record.whereIs}
            </p>
            <p>
              <strong>시간:</strong> {record.whatTime}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowTodayRecord;
