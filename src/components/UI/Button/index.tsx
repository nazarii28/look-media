import classes from './Button.module.sass'
import classNames from "classnames";
import PropTypes from 'prop-types'
import {ReactNode} from "react";

interface IButtonProps {
    children: ReactNode,
    outline?: boolean,
    className?: string,
    onClick?: () => void,
    circle?: boolean,
    type?: "button" | "submit" | "reset"
}

const Button = (props: IButtonProps) => {
    const {
        children,
        outline = false,
        className,
        onClick,
        circle = false,
        type
    } = props

  return (
    <button
      type={type ? type : 'button'}
      className={classNames(classes.btn, 'uppercase', className, {
      [classes.outline]: outline,
      [classes.circle]: circle
    })}
    onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  outline: PropTypes.bool
}

export default Button