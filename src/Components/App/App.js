import "./App.css";
import { useState } from "react";
import Dropdown from "../SharedComponents/Dropdown/Dropdown";
const productsData = require("../../DB/productsData.json");

const App = () => {
  const [sell, setSell] = useState(true);

  const sellHandler = () => {
    setSell(!sell);
  };

  const [prodType, setProductType] = useState("");

  const handleProductChange = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.value) {
      case "Huevo de pascua": {
        setChocTypeOptions(productsData.chocTypes.eggTypes);
        setWeightTypeOptions(productsData.weightTypes.eggWeights);
        break;
      }
      case "Chocolate en barra": {
        setChocTypeOptions(productsData.chocTypes.barTypes);
        setWeightTypeOptions(productsData.weightTypes.barWeights);
        break;
      }
      case "Chocolate en rama": {
        setChocTypeOptions(productsData.chocTypes.flakeTypes);
        setWeightTypeOptions(productsData.weightTypes.flakeWeights);
        break;
      }
    }
    setProductType(e.target.value);
  };

  // const [chocType, setChocType] = useState("");
  // const handleTypeChange = (e) => {
  //   setChocType(e.target.value);
  // };

  // const [chocWeight, setChocWeight] = useState("");
  // const handleWeightChange = (e) => {
  //   setChocWeight(e.target.value);
  // };

  const [chocTypeOptions, setChocTypeOptions] = useState([]);
  const [weightTypeOptions, setWeightTypeOptions] = useState([]);

  console.log(chocTypeOptions, weightTypeOptions);

  const productTypes = [
    "Huevo de pascua",
    "Chocolate en barra",
    "Chocolate en rama",
  ];

  // const chocTypes = {
  //   eggTypes: ["Blanco", "Negro"],
  //   barTypes: ["Maní", "Amargo", "Leche"],
  //   flakeTypes: ["Blanco", "Negro"],
  // };

  // const weightTypes = {
  //   eggWeights: ["70g", "110g"],
  //   barWeights: ["70g", "160g", "180g", "300g"],
  //   flakeWeights: ["70g", "160g"],
  // };

  console.log(chocTypeOptions);

  return (
    <div className="App">
      <Dropdown
        label={"Tipo de producto"}
        options={productsData.productTypes}
        //value={prodType}
        onChange={handleProductChange}
      />
      <Dropdown
        label={"Tipo de chocolate"}
        options={chocTypeOptions}
      //value={chocType}
      //onChange={handleTypeChange}
      />

      <Dropdown
        label={"Peso"}
        options={weightTypeOptions}
      //value={chocWeight}
      //onChange={handleWeightChange}
      />
    </div>
  );
};

export default App;
