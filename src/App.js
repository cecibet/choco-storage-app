import "./App.css";
//import Login from "./components/Login";
import Logo from "./components/Logo";
import { useState } from "react";
import TaskButtons from "./components/TaskButtons";

const App = () => {
  const [sell, setSell] = useState(false);

  const sellHandler = () => {
    setSell(!sell);
    console.log(sell);
  };

  const [easterEgg, seteasterEgg] = useState(false);

  const easterEggHandler = () => {
    seteasterEgg(!easterEgg);
    if (chocBar) {
      setchocBar(!chocBar);
    }
    if (chocFlake) {
      setchocFlake(!chocFlake);
    }
  };

  const [chocBar, setchocBar] = useState(false);

  const chocBarHandler = () => {
    setchocBar(!chocBar);
    if (chocFlake) {
      setchocFlake(!chocFlake);
    }
    if (easterEgg) {
      seteasterEgg(!easterEgg);
    }
  };

  const [chocFlake, setchocFlake] = useState(false);

  const chocFlakeHandler = () => {
    setchocFlake(!chocFlake);
    if (easterEgg) {
      seteasterEgg(!easterEgg);
    }
    if (chocBar) {
      setchocBar(!chocBar);
    }
  };

  const [chocType, setchocType] = useState(false);
  const chocTypeHandler = () => {
    setchocType(!chocType);
  };

  return (
    <div className="App">
      <Logo />

      <TaskButtons
        sell={sell}
        easterEgg={easterEgg}
        chocBar={chocBar}
        chocFlake={chocFlake}
        chocType={chocType}
        sellHandler={sellHandler}
        chocBarHandler={chocBarHandler}
        chocFlakeHandler={chocFlakeHandler}
        easterEggHandler={easterEggHandler}
        chocTypeHandler={chocTypeHandler}
      ></TaskButtons>
    </div>
  );
};

export default App;
