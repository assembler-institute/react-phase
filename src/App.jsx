import './App.css';
import UserProvider from './context/User/UserProvider';
import { RouterPaths } from './Routes/Router';
import CounterProvider from './context/Counter/CounterProvider';

function App() {
  return (
    <>
      <CounterProvider>
        <UserProvider>
          <RouterPaths />
        </UserProvider>
      </CounterProvider>
    </>
  );
}

export default App;
