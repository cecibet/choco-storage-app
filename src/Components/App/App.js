import "./App.css";
import Logo from "../SharedComponents/Logo/Logo";
import { useState } from "react";
import TaskButtons from "../Navbar/Menu/TaskButtons";

const App = () => {

  const products = [
    { name: "Huevo de pascua", value: "huevo" },
    { name: "Chocolate en barra", value: "barra" },
    { name: "Chocolate en rama", value: "rama" },
  ];

  const eggTypes = ["Blanco", "Negro"];
  const barTypes = ["Maní", "Amargo", "Leche"];
  const flakeTypes = ["Blanco", "Negro"];

  const eggWeights = ["70g", "110g"];
  const barWeights = ["70g", "160g", "180g", "300g"];
  const flakeWeights = ["70g", "160g"];

  const [sell, setSell] = useState(false);

  const ChosenValue = (type) => {
    return <option value={type}>{type}</option>;
  };

  const sellHandler = () => {
    setSell(!sell);
    console.log(sell);
  };

  const [product, setProduct] = useState("huevo");
  const handleProductChange = (e) => {
    setProduct(e.target.value);
  };

  const [chocType, setChocType] = useState("");
  const handleTypeChange = (e) => {
    setChocType(e.target.value);
  };

  const [chocWeight, setChocWeight] = useState("");
  const handleWeightChange = (e) => {
    setChocWeight(e.target.value);
  };
  console.log(product, chocType, chocWeight);

  return (
    <div className="App">
      <Logo />

      <TaskButtons sell={sell} sellHandler={sellHandler}></TaskButtons>
      {sell && (
        <div>
          <div className="custom-select">
            <select onChange={handleProductChange}>
              <option disabled>Seleccione</option>
              {products.map((choco) => (
                <option key={choco.name} value={choco.value}>
                  {choco.name}
                </option>
              ))}
            </select>
          </div>

          <div className="custom-select">
            <select onChange={handleTypeChange}>
              {product === "barra" && barTypes.map(ChosenValue)}
              {product === "huevo" && eggTypes.map(ChosenValue)}
              {product === "rama" && flakeTypes.map(ChosenValue)}
            </select>
          </div>

          <div className="custom-select">
            <select onChange={handleWeightChange}>
              {product === "barra" && barWeights.map(ChosenValue)}
              {product === "huevo" && eggWeights.map(ChosenValue)}
              {product === "rama" && flakeWeights.map(ChosenValue)}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

/*
import "./App.css";
import Logo from "../SharedComponents/Logo/Logo";
import { useState } from "react";
import TaskButtons from "../Navbar/Menu/TaskButtons";
import { useAuth } from "../Context/AuthContextProvider";

const App = () => {

  const auth = useAuth();

   return (
    <div className="App">
      <Logo />
      { auth.currentUser &&
            renderizar los componentes si esta autorizado. capaz preguntar aca quien es el usuario a ver que componentes se renderizan
          }
          { !auth.currentUser && 
            <Login />
          }
    </div>
  );
  };

export default App;
*/
