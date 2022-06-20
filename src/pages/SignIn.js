/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HomePageImage from "../assets/undraw_people_search_wctu.png"
import Button from '../components/Button'
import InputBox from '../components/InputBox'
import GoogleLogo from '../assets/Google.svg'
import { useKeycloak } from "@react-keycloak/web";

const SignIn = () => {
  const { keycloak, initialized } = useKeycloak();
  return (
    <>
      <div className='grid lg:gap-6 md:gap-0 lg:grid-cols-5 grid-cols-1 min-h-screen'>
        <div className='bg-blue-400 col-span-2 p-17'>
          <p className='font-monteserrat tracking-widest text-white font-medium'>SME Better</p>
          <div className='mt-21'>
            <p className='text-white text-2xl font-medium'>Log into your Business Manager</p>
            <form className='mt-7'>
              <InputBox
                type="text"
                placeholder="John"
                label="First Name"
                required
              />
               <InputBox
                type="text"
                placeholder="Doe"
                label="Last name"
                required
              />
               <InputBox
                type="text"
                placeholder="someone@email.com"
                label="Email Address"
                required
              />
              <InputBox
                type="password"
                placeholder="Password"
                label="Enter Your Password"
                required
              />
              <Button
              btnText= "SIGN UP"
              btnStyle="bg-none border border-white text-white font-bold"
              />
              <div className='text-white text-center mt-7'>
                <p>Already have an account?  {!keycloak.authenticated && (<span className='font-bold cursor-pointer' onClick={() => keycloak.login()}>Sign In</span>)}</p>
                <p className='font-bold mt-7'><a href="/forgot-password">Forgot password?</a></p>
              </div>
            </form>
            <Button
              btnText= "Log in with Google"
              btnImageStyle= "mr-6"
              btnStyle="bg-white border border-white text-black-100 font-normal flex justify-center items-center"
              BtnIcon={GoogleLogo}
              showIcon
              />
          </div>
        </div>
        <div className='col-span-3 p-10 order-first lg:order-last'>
          <div className='flex flex-col justify-center items-center min-h-full'>
            <p className='text-2xl text-blue-400 text-center font-medium'>Organize your customer information</p>
            <div className='mt-15'>
              <div>
                <img src={HomePageImage} alt="" className='w-54 md:w-96'/>
              </div>
              <div className="flex justify-center items-center mt-15">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                <div className="w-2 h-2 rounded-full bg-blue-350 mr-2" ></div>
                <div className="w-2 h-2 rounded-full bg-blue-350 mr-2"></div>
                <div className="w-2 h-2 rounded-full bg-blue-350 mr-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn