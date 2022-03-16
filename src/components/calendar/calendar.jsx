import { getDay, getMonth, getFullYear, getDate } from '../../util/day.js';
import React, { useState, useEffect } from 'react';
import Head from '../calendar/calendarHead';
import Body from "../calendar/calendarBody"
import styles from "./calendar.module.css";

const Calendar = () => {
  const YEAR = getFullYear();
  const MONTH = getMonth();
  const [month, setMonth] = useState(MONTH);
  const [year, setYear] = useState(YEAR);
  const [today, setToday] = useState(0);
  const [totalDate, setTotalDate] = useState([]);

  const goToday = () => {
    let TODAY = getDay();
    let goMonth = getMonth();
    setMonth(goMonth);
    setToday(TODAY);
  }

  const makePrevDate = (lastDate, lastDay, thisNextDay, thisNextDate, tld, td) => {
    let PVLD = [];

    if(lastDate !== 6) {
      for(let i = 0; i < lastDay + 1; i++) {
        PVLD.unshift(lastDate - i);
      }
    }

    for(let i = 1; i < 7 - thisNextDay; i++) {
      if(i === 0) {
        return tld;
      }
      tld.push(i);
    }
    td = [...Array(thisNextDate + 1).keys()].slice(1);
    return PVLD.concat(td, tld);
  }

  const changeDate = (month) => {
    const thisNextDay = getDate(YEAR, month, 0).getDay();
    const thisNextDate = getDate(YEAR, month, 0).getDate();
    let lastDate = getDate(YEAR, month -1, 0).getDate();
    let lastDay = getDate(YEAR, month -1, 0).getDay();
    let tld = [];
    let td = []; 

    return makePrevDate(lastDate, lastDay, thisNextDay, thisNextDate, tld, td);
  };

  useEffect(() => {
    setTotalDate(changeDate(7));
  }, []);

  useEffect(() => {
    setTotalDate(changeDate(month));
  }, [month]);

  return (
    <div className={styles.container}>
      <Head year={year} month={month} setMonth={setMonth} goToday={goToday} />
      <Body totalDate={totalDate} today={today} month={month} year={year} />
    </div>
  );
};

export default Calendar;
