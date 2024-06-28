import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowSomeDay = ({ date }) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/record?date=${date}`, {
          headers: {
            Authorization: `${localStorage.getItem('accessToken')}`,
          },
        });
        setRecords(response.data.result);
      } catch (error) {
        console.error("기록을 가져오는 데 실패했습니다:", error);
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
          records.map(record => (
            <div key={record.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '2px' }}>
            <p><strong>카테고리:</strong> {record.category}</p>
            <p><strong>무엇인가:</strong> {record.whatIs}</p>
            <p><strong>누구인가:</strong> {record.whoIs}</p>
            <p><strong>어디에서:</strong> {record.whereIs}</p>
            <p><strong>시간:</strong> {record.whatTime}</p>
            </div>
          ))
        ) : (
          <p>기록이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default ShowSomeDay;
