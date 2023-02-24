import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  //   const inputRef = useRef('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const navigator = useNavigate();

  //   console.log(userData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userData.email === 'assembler@school.com' &&
      userData.password === '123'
    ) {
      console.log('Login Exitoso');
      navigator('/');
    }
  };

  //   const onChangeEmail = (e) => {
  //     setEmail(e.target.value);
  //   };
  //   const onChangePassword = (e) => {
  //     setPassword(e.target.value);
  //   };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    console.log({ name });
    console.log({ value });

    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <h2>Welcome</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          value={userData.email}
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
