import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthProvider from '../context/authProvider';

export const LoginPage = () => {

  const { user, isLogged } = useContext(AuthProvider);

  console.log(user)

  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
}
