import "./App.css";
import UserProvider from "./context/User/UserProvider";
import { RouterPaths } from "./Routes/Router";

function App() {
  return (
    <>
      <UserProvider>
        <RouterPaths />
      </UserProvider>
    </>
  );
}

export default App;
