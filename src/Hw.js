import React from 'react';
import {format} from 'date-fns';
import facebook from "./img/faceb.png";

export default function Hw() {

  const images = () => {
    return (
      <div className='hw'>
        <div className='img1'>HEY</div>
        <div className='img2'>LET'S</div>
        <div className='img3'>GIVE</div>
        <div className='img4'>ALL</div>
        <div className='img5'>YOU CAN</div>
      </div>
    )
  }

  const time = format(new Date(), "dd.MM.yyyy HH:mm");

  const navbar = () => {
    return (
      <div className='navbar'>
        <div className='icon'>
          <img src={facebook} alt="facebook icon" width={40} height={40} />
          <div className='field'></div>
        </div>
        <div className='time' style={{ color: "white", }}>{time}</div>
      </div>
    )
  }

  return (
    <div>
      <div>{navbar()}</div>
      <div>{images()}</div>
    </div>
    
  )
}
