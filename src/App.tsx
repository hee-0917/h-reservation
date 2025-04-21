import React from 'react';
import ExcelUploader from './components/ExcelUploader';
import CalendarComponent from './components/Calendar';
import DailyView from './components/DailyView';

const App: React.FC = () => {
  return (
    <div>
      <h1>검사 예약 관리 시스템</h1>
      <ExcelUploader />
      <CalendarComponent />
      <DailyView />
    </div>
  );
};

export default App; 