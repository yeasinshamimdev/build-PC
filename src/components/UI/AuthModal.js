import { setOpen, setSignUp } from "@/redux/features/modal/modalSlice";
import { Button } from "antd";
import { FcGallery, FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";

const AuthModal = ({children}) => {
  const isOpen = useSelector(state => state.modal.open);
  const isSignUp = useSelector(state => state.modal.signup)
  const dispatch = useDispatch();

  return (
    <>
    {
      isOpen &&
       <div className={`z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50`}>
        <div className="bg-white pt-8 px-4 md:px-8 pb-8 rounded-lg shadow-md w-[80%] lg:w-1/4 overflow-y-auto">
          <div className="flex justify-between items-center">
            <h1 className="mt-0 text-2xl">{ "Login"} </h1>
            <div onClick={() => {
              dispatch(setOpen())
              dispatch(setSignUp())
            }}
            className="cursor-pointer m-0 mt-[-10px] hover:bg-slate-200 w-7 h-7 text-slate-600 text-center rounded-full flex items-center justify-center">
              <h1 className="text-sm ">X</h1>
            </div>
          </div>
          {children}
        <div className="relative flex justify-center text-xs uppercase mt-4">
          <span className="bg-background px-2 border-r-2 ">
            Or continue with
          </span>
        </div>

        <div className="flex justify-center gap-4 md:gap-10 mt-4">
        <Button
          type="button"
          className="flex items-center w-[90%] h-10 text-white font-semibold justify-center gap-1 bg-cyan-600 hover:bg-cyan-500"
          >
            <FcGoogle size={20} />
            <p>Google</p>
          </Button>
            <Button
              type="button"
              className="flex items-center w-[90%] h-10 text-white font-semibold justify-center gap-1 bg-slate-800 hover:bg-slate-700"
            >
              <FcGallery size={20} />
              <p>Github</p>
            </Button>
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default AuthModal;
