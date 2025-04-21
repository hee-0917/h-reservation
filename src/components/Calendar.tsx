import React from 'react';
import Calendar from 'react-calendar';

const CalendarComponent: React.FC = () => {
  const handleDateClick = (date: Date) => {
    // 날짜 클릭 시 상세 보기 페이지로 이동
    console.log(date);
  };

  return (
    <Calendar
      onClickDay={handleDateClick}
      // 예약 데이터 표시 로직 추가
    />
  );
};

export default CalendarComponent; 