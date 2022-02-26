import classes from './Button.module.sass'
import classNames from "classnames";
import PropTypes from 'prop-types'

const Button = ({children, outline, className, onClick, circle, type}) => {
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