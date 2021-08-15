import { useState } from 'react';
import './App.css';

function App() {
  const [colorContainer, setColor] = useState({
    color:"#ffffff",
    msg: "RGB(255,255,255)",

  });
  let reg = /^#([a-f]|[A-F]|[0-9]){3}([a-f]|[A-F]|[0-9]){3}$/i;
  const hexToRgb = hex =>
  hex.replace(reg,(r, g, b) => r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16));

  const checkColor = evt => {
    if(evt.target.value.match(reg) && evt.target.value.length == 7) {
      setColor({color: evt.target.value, msg: `RGB(${hexToRgb(evt.target.value)[0]}, ${hexToRgb(evt.target.value)[1]}, ${hexToRgb(evt.target.value)[2]})` });
    }else if(evt.target.value.length == 7){
     setColor({msg:"Ошибка!"})
    }
    console.log(colorContainer.color);
  }

  return (
    <div className="App" style={{backgroundColor: colorContainer.color }}>
      <input className="input_field" maxLength="7" onChange={checkColor}></input>
      <div className="RGB-box">{colorContainer.msg}</div>
    </div>
  );
}

export default App;

