import { useState, useEffect } from 'react'
import LoginPage from "./pages/LoginPage";
import Homepage from './pages/Homepage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn ? <Homepage /> : <LoginPage/>}
    </>
  );
}

export default App;
