import { Button } from "antd";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import Github from "../Icon/Github";

const SocialLogin = () => {
  return (
    <div>
      <div className="relative flex justify-center text-xs uppercase mt-4">
          <span className="bg-background px-2 border-r-2 ">
            Or continue with
          </span>
        </div>

        <div className="flex justify-center gap-4 md:gap-10 mt-4">
          <Button onClick={() => {
            signIn("google", {
              callbackUrl: "https://build-pc-lovat.vercel.app/pc-builder"
            })
          }}
          type="button"
          className="flex items-center w-[90%] h-10 text-white font-semibold justify-center gap-1 bg-sky-600 hover:bg-sky-500"
          >
            <FcGoogle size={20} /> Google
          </Button>
          <Button  onClick={() => {
            signIn("github", {
              callbackUrl: "https://build-pc-lovat.vercel.app/pc-builder"
            })
          }}
            type="button"
            className="flex items-center w-[90%] h-10 text-white font-semibold justify-center gap-1 bg-slate-800 hover:bg-slate-700"
          >
            <Github size={18} /> Github
          </Button>
        </div>
    </div>
  )
}

export default SocialLogin;
