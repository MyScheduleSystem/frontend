import React, { useState } from "react";
import styles from "./login.module.css";

const Login = () => {
  const [btnOpen, setBtnOpen] = useState(false);
  const [regOpen, setRegOpen] = useState(false);
  const [logOpen, setLogOpen] = useState(false);

  const btnStyle = {left: '0'};
  const logStyle = {left: '50px'};
  const regStyle = {left: '450px'};

  const loginHandler = () => {
    setLogOpen(!logOpen);
    setRegOpen(!regOpen);
    setBtnOpen(!btnOpen);
  }
  const registerHandler = () => {
    setLogOpen(!logOpen);
    setRegOpen(!regOpen);
    setBtnOpen(!btnOpen);
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <div className={styles.buttonBox}>
          <div className={styles.btn} style={!btnOpen ? btnStyle : {left: '110px'}}></div>
          <button type="button" className={styles.toggleBtn} onClick={loginHandler}>로그인</button>
          <button type="button" className={styles.toggleBtn} onClick={registerHandler}>회원가입</button>
        </div>
        <div className={styles.socialIcons}>
        {/**img src 안에 SNS 이미지 다운받아서 넣기 */}
        <img src=""/> 
        <img src=""/>
        <img src=""/>
      </div>
      <form className={styles.loginGroup} style={!logOpen ? logStyle : {left: '-400px'}}>
        <input type="text" className={styles.inputField} placeholder="User Id" required/>
        <input type="text" className={styles.inputField} placeholder="Enter Password" required/>
        <input type="checkbox" className={styles.chechBox}/><span>비밀번호 기억하기</span>
        <button type="submit" className={styles.submitBtn}>로그인</button>
      </form>
      <form className={styles.registerGroup} style={!regOpen ? regStyle : {left: '50px'}}>
        <input type="text" className={styles.inputField} placeholder="User Id" required/>
        <input type="email" className={styles.inputField} placeholder="Email Id" required/>
        <input type="text" className={styles.inputField} placeholder="Enter Password" required/>
        <input type="checkbox" className={styles.chechBox}/><span>이용약관에 동의합니다.</span>
        <button type="submit" className={styles.submitBtn}>회원가입</button>
      </form>
      </div>

    </div>
  );
};

export default Login;
