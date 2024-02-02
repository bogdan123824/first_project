import React from 'react';

interface LoginProps{
    RegisterClick: () => void;
}

const Login: React.FC<LoginProps> = (props) => {
  return (
    <div className="container2">
      {<form id="loginForm" className="form">
        <h2>Авторизация</h2>
        <input type="email" id="email" name="email" required placeholder="Введите ваш email" />
        <input className="input2" type="password" id="password" name="password" required placeholder="Введите ваш пароль" />
        <div className="form-group">
          <div className="checkbox">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe"><div className="text">Запомнить меня</div></label>
          </div>
          <div className="forgot-password">
            <a href="#" id="forgotPasswordLink">Забыли пароль?</a>
          </div>
        </div>
        <button type="submit" className="button2">Войти</button>
        <div className="register-link">
          <p>Нет аккаунта? <a href="#" id="registerLink" onClick={props.RegisterClick}>Зарегистрироваться</a></p>
        </div>
      </form>}
    </div>
  );
};

export default Login;