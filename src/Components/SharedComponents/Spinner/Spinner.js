import "./Spinner.css";
import { useNavigate } from "react-router-dom";

export default function Spinner() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/Home", { replace: true });
  }, 2500);

  return <div class="lds-dual-ring"></div>;
}
