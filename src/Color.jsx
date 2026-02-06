import React, { useState } from 'react'
import "./Color.css"

const Color = () => {

  const [Color, setColor] = useState("")

  return (
    <div className='large'>
      <div className='in'>
        <div className="color box1" onClick={() => setColor("red")} ></div>
        <div className="color box2" onClick={() => setColor("green")}></div>
        <div className="color box3" onClick={() => setColor("blue")}></div>
      </div>
      <div
        className='display'
        style={{ backgroundColor: Color}}>
      
        {/* {selectedColor ? `${selectedColor}` : ""} */}
      </div>
    </div>
  )
}

export default Color
