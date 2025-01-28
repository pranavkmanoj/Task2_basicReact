import { useState } from "react";
import reactLogo from "./assets/react.svg";
import MyComp from "./Components/Mycomp";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MyComp></MyComp>
    </div>
  );
}

export default App;
