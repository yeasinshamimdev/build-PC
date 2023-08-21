"use client"
import { setSignUp } from '@/redux/features/modal/modalSlice';
import { useDispatch } from 'react-redux';

const CreateNewAccount = () => {
  const dispatch = useDispatch();
  
  return (
    <div className="flex items-center">
      <p className="text-sm ">Create a build PC account?</p>
      <button onClick={() => dispatch(setSignUp(true))}
        className="ml-2 bg-white border-0 cursor-pointer text-blue-400 text-[16px] font-semibold underline">
        Sign up
      </button>
    </div>
  )
}

export default CreateNewAccount;
