import React, { useState } from 'react';

const CalendarBody = ( {totalDate, today, month, year} ) => {
  const lastDate = totalDate.indexOf(1);
  const firstDate = totalDate.indexOf(1, 7);

  const [holiday, setHoliday] = useState([0]);
  return (
    <div></div>  
  )  
};

export default CalendarBody;
