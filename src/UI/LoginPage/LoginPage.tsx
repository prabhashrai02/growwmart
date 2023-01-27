import React from 'react'
import style from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={style.login43Page}>
        <form id='login_form'>
          <div className={style.login10Details}>
            <div className={style.login12Input}>
              <label>Username </label>
              <input type='text' />
            </div>
            <div className={style.login12Input}>
              <label>Password </label>
              <input type='password' />
            </div>
            <div className={style.login13Buttons}>
              <input type='submit' className={style.login21Button} />
              <input type='reset' className={style.login21Button} />
            </div>
          </div>
        </form>
    </div>
  )
}

export default LoginPage;
