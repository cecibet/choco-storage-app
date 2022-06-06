import "./App.css";
//import Login from "./components/Login";
import Logo from "./components/Logo";
import { useState } from "react";
import TaskButtons from "./components/TaskButtons";

const App = () => {
  const [sell, setSell] = useState(false);

  const sellHandler = () => {
    if (!sell) {
      if (chocBar) setChocBar(!chocBar);
      if (chocFlake) setchocFlake(!chocFlake);
      if (chocType) setchocType(!chocType);
      if (easterEgg) setEasterEgg(!easterEgg);
    }
    setSell(!sell);
    console.log(sell);
  };

  const [easterEgg, setEasterEgg] = useState(false);

  const easterEggHandler = () => {
    easterEgg ? setEasterEgg(easterEgg) : setEasterEgg(!easterEgg);
    if (chocBar) setChocBar(!chocBar);
    if (chocFlake) setchocFlake(!chocFlake);
    if (chocType) setchocType(!chocType);
  };

  const [chocBar, setChocBar] = useState(false);

  const chocBarHandler = () => {
    chocBar ? setChocBar(chocBar) : setChocBar(!chocBar);

    if (chocFlake) setchocFlake(!chocFlake);
    if (easterEgg) setEasterEgg(!easterEgg);
    if (chocType) setchocType(!chocType);
  };

  const [chocFlake, setchocFlake] = useState(false);

  const chocFlakeHandler = () => {
    chocFlake ? setchocFlake(chocFlake) : setchocFlake(!chocFlake);
    if (easterEgg) setEasterEgg(!easterEgg);
    if (chocBar) setChocBar(!chocBar);
    if (chocType) setchocType(!chocType);
  };

  const [chocType, setchocType] = useState(false);
  const chocTypeHandler = () => {
    chocType ? setchocType(chocType) : setchocType(!chocType);
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
