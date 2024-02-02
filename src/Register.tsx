import React, { useState } from 'react';

interface RegisterProps{
    LoginClick: () => void;
}

const Register: React.FC<RegisterProps> = (props) => {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [patronymic, setPatronymic] = useState<string>('');
  
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
  };
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handlePatronymicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatronymic(e.target.value);
  };
  
  return (
    <div className="container">
      <form id="registerForm" className="form">
        <h2>Регистрация</h2>
        <input type="text" id="fullName" name="fullName" required placeholder="Введите имя" onChange={handleFirstNameChange} />
        <input type="text" id="lastName" name="lastName" required placeholder="Введите фамилию" onChange={handleLastNameChange} />
        <input type="text" id="patronymic" name="patronymic" required placeholder="Введите отчество" onChange={handlePatronymicChange} />
        <input type="email" id="emailRegister" name="emailRegister" required placeholder="Введите email" />
        <input type="password" id="passwordRegister" name="passwordRegister" required placeholder="Введите ваш пароль" />

        <div id="classInput" style={{ display: selectedRole === 'student' ? 'block' : 'none' }}>
          <input className="input3" type="text" id="class" name="class" placeholder="Введите класс" />
        </div>

        <div id="subjectInput" style={{ display: selectedRole === 'teacher' ? 'block' : 'none' }}>
          <input className="input3" type="text" id="subject" name="subject" placeholder="Введите предмет" />
        </div>

        <select className="input3" id="role" name="role" required value={selectedRole} onChange={handleRoleChange}>
          <option value="" disabled hidden>Выберите роль</option>
          <option value="student">Ученик</option>
          <option value="teacher">Учитель</option>
        </select>

        <button type="submit">Зарегистрироваться</button>
        <div className="login-link">
          <p>Есть аккаунт? <a href="#" id="loginLink" className="loginLink" onClick={props.LoginClick}>Войти</a></p>
        </div>
      </form>
    </div>
  );
};

export default Register;