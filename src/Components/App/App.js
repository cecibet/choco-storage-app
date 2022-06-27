import "./App.css";
import { useState } from "react";
import Dropdown from "../SharedComponents/Dropdown/Dropdown";
const productsData = require("../../DB/productsData.json");
const dataProducts = require("../../DB/dataProducts.json");

const App = () => {
  const [sell, setSell] = useState(true);
  const [prodType, setProductType] = useState("");
  const [chocTypeOptions, setChocTypeOptions] = useState([]);
  const [weightTypeOptions, setWeightTypeOptions] = useState([]);

  const productTypes = [...new Set(dataProducts.map((e) => e.productType))];
  console.log(productTypes);

  const eggTypesjson = dataProducts.filter(function (item) {
    return item.productType === "Huevo de Pascua";
  });
  const eggChocTypes = [...new Set(eggTypesjson.map((e) => e.chocolateType))];
  const eggWeightTypes = [...new Set(eggTypesjson.map((e) => e.weight))];

  const barTypesjson = dataProducts.filter(function (item) {
    return item.productType === "Chocolate en Barra";
  });
  const barChocTypes = [...new Set(barTypesjson.map((e) => e.chocolateType))];
  const barWeightTypes = [...new Set(barTypesjson.map((e) => e.weight))];

  const flakeTypesjson = dataProducts.filter(function (item) {
    return item.productType === "Chocolate en Rama";
  });
  const flakeChocTypes = [
    ...new Set(flakeTypesjson.map((e) => e.chocolateType)),
  ];
  const flakeWeightTypes = [...new Set(flakeTypesjson.map((e) => e.weight))];

  const handleProductChange = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.value) {
      case "Huevo de pascua": {
        setChocTypeOptions(eggChocTypes);
        setWeightTypeOptions(eggWeightTypes);
        break;
      }
      case "Chocolate en barra": {
        setChocTypeOptions(barChocTypes);
        setWeightTypeOptions(barWeightTypes);
        break;
      }
      case "Chocolate en rama": {
        setChocTypeOptions(flakeChocTypes);
        setWeightTypeOptions(flakeWeightTypes);
        break;
      }
    }
    setProductType(e.target.value);
  };

  const sellHandler = () => {
    setSell(!sell);
  };

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
