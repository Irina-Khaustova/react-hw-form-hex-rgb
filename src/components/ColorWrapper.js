import React, { useState} from "react";
import convertor from "./Convertor";

export default function ColorWrapper() {
   // const [input, inputState] = useState('')
    const [rgb, rgbState] = useState('')
    const [color, colorState] = useState('')

    const handleChange = ({target}) => {
      let rgbNew = null;
      let colorNew = null;
      let str = target.value;
      let isValid = convertor(str);
      if(str.length > 6) {
      rgbNew = isValid !== null? isValid: 'ОШИБКА!'
      }
      colorNew = rgbNew !== 'ОШИБКА!'? rgbNew : 'rgb(232, 22, 22)'
      //inputState(str);
      rgbState(rgbNew);
      colorState(colorNew)
    }

    return (
      <div className="colorWrapper" style={{backgroundColor: color}}>
        <div className="input-wrapper">
          <form  onChange={handleChange}>
            <input className='input'/> 
          </form>
          <div className="color-rgb">{rgb}</div>
        </div>
      </div>
    )
}