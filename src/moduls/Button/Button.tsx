import classNames from 'classnames'
import React from 'react'
import { buttonContrast, buttonDanger, buttonInfo, buttonPrimary, buttonSecondary, buttonSuccess, buttonWarning } from '../../styles'

interface IButton extends React.HTMLAttributes<HTMLButtonElement>{}

export const  ButtonSuccess = ({className,children,...props}:IButton) => {
  return (
    <button className={classNames(buttonSuccess,className)} {...props}>
      {children}
    </button>
  )
}

export const  ButtonPrimary = ({className,children,...props}:IButton) => {
  return (
    <button className={classNames(buttonPrimary,className)} {...props}>
      {children}
    </button>
  )
}

export const  ButtonSecondary = ({className,children,...props}:IButton) => {
  return (
    <button className={classNames(buttonSecondary,className)} {...props}>
      {children}
    </button>
  )
}

export const  ButtonDanger = ({className,children,...props}:IButton) => {
  return (
    <button className={classNames(buttonDanger,className)} {...props}>
      {children}
    </button>
  )
}

export const  ButtonWarning = ({className,children,...props}:IButton) => {
  return (
    <button className={classNames(buttonWarning,className)} {...props}>
      {children}
    </button>
  )
}

export const  ButtonInfo = ({className,children,...props}:IButton) => {
  return (
    <button className={classNames(buttonInfo,className)} {...props}>
      {children}
    </button>
  )
}

export const  ButtonContrast = ({className,children,...props}:IButton) => {
  return (
    <button className={classNames(buttonContrast,className)} {...props}>
      {children}
    </button>
  )
}
