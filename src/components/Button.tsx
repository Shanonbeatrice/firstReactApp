import React from 'react'

interface Props{
    children:string;
    color?:'primary'|'seconary'|'danger';// question mark signifies that this prop is optional 
    onClick : () => void

}

const Button = ({children, onClick,color = 'primary'}:Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
