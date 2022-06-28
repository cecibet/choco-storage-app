
import "./App.css";
import Logo from "../SharedComponents/Logo/Logo";
import { useAuth } from "../Context/AuthContextProvider";
import Sell from "../Sell/Sell"
import Login from "../LoginForm/Login";

const App = () => {
  const auth = useAuth();
   return (
    <div className="App">
      <Logo />
      { auth.currentUser &&
            <Sell />
          }
          { !auth.currentUser && 
            <Login />
          }
    </div>
  );
  };
export default App;
