import React from 'react'
import { AppContext } from '../App'

const Notice = ({ title, description }) => {
   const {setCartOpened} = React.useContext(AppContext);
  return (
   <div className='notice'>
      <h2>{title}</h2>
      <div>{description}</div>
      <button onClick={() => setCartOpened(false)}>Get Back</button>
    </div>
  )
}
export default Notice;