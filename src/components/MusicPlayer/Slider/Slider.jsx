import classes from "./Slider.module.sass";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const Slider = ({progress, onChange, color, onMouseDown, onMouseUp, unTouchable}) => {
  const thumbWidth = 20

  const [position, setPosition] = useState(0)
  const [marginLeft, setMarginLeft] = useState(0)

  useEffect(() => {
    const centerThumb = (thumbWidth / 100) * progress * -1
    setMarginLeft(centerThumb)
    setPosition(progress)
  }, [progress])


    return (
      <div className={classes.Slider}>
        <div className={classes.customProgress} style={{
          background: `linear-gradient(to right, ${color} ${position}%,transparent ${position}%, transparent 100%)`
        }}>
          <div style={{
            left: position + '%',
            marginLeft: marginLeft,
            width: thumbWidth
          }}/>
        </div>
        <input
          style={{
            zIndex: unTouchable ? '-1' : '1'
          }}
          onMouseDown={onMouseDown}
          onMouseUp={(e) => onMouseUp(e.target.value)}
          value={position}
          onChange={(e) => onChange(e.target.value)}
          step={0.01}
          type="range"
        />
      </div>
    )
}

Slider.propTypes = {
  onMouseUp: PropTypes.func
}

Slider.defaultProps = {
  onMouseUp: function() {}
}

export default Slider