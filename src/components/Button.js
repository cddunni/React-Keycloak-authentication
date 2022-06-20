import React from 'react'

const Button = ({btnText, btnStyle, btnImageStyle, BtnIcon, showIcon=false}) => {
  return (
    <div className="mt-7 max-w-98">
        <div className="grid grid-cols-1 gap-1">
            <button className={`text-sm text-center rounded h-11 ${btnStyle}`} >
                {showIcon && <img src={BtnIcon} alt="button Icon" className={btnImageStyle}/> }
                {btnText}    
            </button>
        </div>
    </div>
  )
}

export default Button