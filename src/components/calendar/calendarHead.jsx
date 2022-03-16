import { DAY } from '../../util/day.js';
import React from 'react';
import styles from './calendarHead.module.css'

const CalendarHead = ({ year, month, goToday, setMonth }) => {
  const prevMonthHandler = (e) => {
    e.preventDefault();
    month = month <= 1 ? 1 : month - 1;
    setMonth(month);
  }
  
  const nextMonthHandler = (e) => {
    e.preventDefault();
    month = month > 12 ? 12 : month + 1;
    setMonth(month);
  }

  const goTodayHandler = (e) => {
    e.preventDefault();
    goToday();
  }

  return (
    <form className={styles.form}>
      <nav classNmae={styles.section}>
        <div className={styles.year}>
          {year}년 {month}월
        </div>
        <div className={styles.btnBox}>
          <button className={styles.btn} onClick={prevMonthHandler}>&lt;</button>
          <button className={styles.btn} onClick={goTodayHandler}>오늘</button>
          <button className={styles.btn} onClick={nextMonthHandler}>&gt;</button>
        </div>
      </nav>
      <div className={styles.days}>
        {DAY.map((elm, idx) => {
          return <div className={styles.day} key ={idx}>{elm}</div>
        })}
      </div>
    </form>
  );
};
export default CalendarHead;
