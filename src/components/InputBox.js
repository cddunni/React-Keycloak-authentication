import React, {useState} from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const InputBox = ({label, type, placeholder, isRequired=false, value}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
    return (
          <div className="mt-5 max-w-98">
            <div className="grid grid-cols-1 gap-1">
              <label className="text-white mb-1.5 text-sm font-medium">{label}</label>
              <input
                type={type === 'password' && passwordShown ? 'text' : type}
                className="block w-full rounded h-11 outline-none px-3 border border-gray-150"
                placeholder={placeholder}
                required={isRequired}
                value={value}
              />
              { type === 'password' ?
                <div className='relative'>
                  <span className='absolute bottom-17 right-12 text-gray-120' onClick={togglePasswordVisiblity}>
                  { passwordShown ? <AiOutlineEyeInvisible/> : <AiOutlineEye/> }
                  </span>
                </div> : ''
              }
            </div>
          </div>
    )
  }

export default InputBox