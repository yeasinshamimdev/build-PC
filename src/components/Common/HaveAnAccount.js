"use client"

import { setSignUp } from '@/redux/features/modal/modalSlice';
import { useDispatch } from 'react-redux';

const HaveAnAccount = () => {
  const dispatch = useDispatch();
  
  return (
    <div className="flex items-center">
      <p className="text-sm ">Already have an account?</p>
      <button onClick={() => dispatch(setSignUp(false))} 
        className="ml-2 bg-white border-0 cursor-pointer text-blue-400 text-[16px] font-semibold underline">
        Login
      </button>
    </div>
  )
}

export default HaveAnAccount