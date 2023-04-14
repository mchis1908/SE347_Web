import React from 'react'
import "./Header.css"

export default function Header(props) {
  return (
    <div className='Header'>
      <p className='Header_title'>{props.title}</p>
      <div className='Header_account'>
        <p className='Header_account_name'>{props.name}</p>
        <img className='Header_account_Avatar' src={props.avt} alt="image"/>
      </div>
    </div>
  )
}
