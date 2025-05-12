"use client"
import "./Button.css"

const STYLES = ["btn--primary", "btn--outline", "btn--test"]

const SIZES = ["btn--medium", "btn--large"]

export const Button = ({ children, type, onClick, buttonStyle, buttonSize, to }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  // If a custom "to" prop is provided, use that instead of the default "/sign-up"


  return (
    <div className="btn-mobile">
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
        {children}
      </button>
    </div>
  )
}



