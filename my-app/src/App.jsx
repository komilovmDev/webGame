import { useState } from "react";
import Btn from "./Btns";
import './style.css'

function App() {

  let x = 'x'
  let o = 0
  const [app, setApp ] = useState('')

  function x0() {
    if (app == '') {
      setApp(x)
    }if (app == x) {
      setApp(o)
    }
  }

  return (
    <div className="App">
      <Btn app={app} x0={x0}/>
    </div>
  );
}

export default App;
