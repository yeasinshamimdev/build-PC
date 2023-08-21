
import CreateNewAccount from "@/components/Common/CreateNewAccount";
import HaveAnAccount from "@/components/Common/HaveAnAccount";
import SocialLogin from "@/components/Common/SocialLogin";
import { Input } from "antd";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const isSignUp = useSelector(state => state.modal.signUp)
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Login</title>
      </Head>
        <div
        className="bg-white pt-5 px-4 md:px-8 pb-8 rounded-lg shadow-md w-[80%] lg:w-1/4 overflow-y-auto mx-auto mt-10 md:mt-24">
        <div className="flex justify-between items-center">
          <h1 className="mt-0 text-2xl">{ isSignUp ? "Create an account" : "Login form"} </h1>
        </div>

          {
            isSignUp ? <div className={"grid gap-6 mt-8"}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <div className='flex items-center gap-4 mb-2'>
                    <div>
                      <level className="text-sm font-semibold" htmlFor="firstName">
                        First Name
                      </level>
                      <Input
                        className="p-2 font-medium "
                        id="firstName"
                        placeholder="John"
                        type="text"
                        autoCapitalize="none"
                        autoCorrect="off"
                        {...register("firstName", { required: "First name is required" })}
                      />
                      {errors.firstName && (
                        <p className="text-sm mt-1 text-red-900">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <level className="text-sm font-semibold" htmlFor="lastName">
                        Last Name
                      </level>
                      <Input
                        className="p-2 font-medium "
                        id="lastName"
                        placeholder="Deo"
                        type="text"
                        autoCapitalize="none"
                        autoCorrect="off"
                        {...register("lastName", { required: "Last name is required" })}
                      />
                      {errors.lastName && (
                        <p className="text-sm mt-1 text-red-900">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <level className="text-sm font-semibold" htmlFor="email">
                    Email
                  </level>
                  <Input
                    className="p-2 font-medium "
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-sm mt-1 text-red-900">
                      {errors.email.message}
                    </p>
                  )}
                  <level className="mt-3 font-semibold text-sm " htmlFor="password">
                    Password
                  </level>
                  <Input
                    className="p-2 font-medium "
                    id="password"
                    placeholder="password"
                    minLength={6}
                    type="password"
                    autoCapitalize="none"
                    autoCorrect="off"
                    {...register("password", { required: "Password is required" })}
                  />
                  {errors.password && (
                    <p className="text-sm mt-1 text-red-900">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="flex justify-center">
                  <button type="submit" 
                  className="mt-4 bg-indigo-500 text-white font-semibold hover:bg-indigo-600 min-w-[250px] h-10 cursor-pointer rounded-lg border-none"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </form>
            <HaveAnAccount />
            </div>
            :
            <div className={"grid gap-6 mt-6"}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <level className="text-sm font-semibold" htmlFor="email">
                      Email
                    </level>
                    <Input
                      className="p-2 font-medium "
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <p className="text-sm mt-1 text-red-900">
                        {errors.email.message}
                      </p>
                    )}
                    <level className="mt-3 font-semibold text-sm " htmlFor="password">
                      Password
                    </level>
                    <Input
                      className="p-2 font-medium "
                      id="password"
                      placeholder="password"
                      minLength={6}
                      type="password"
                      autoCapitalize="none"
                      autoCorrect="off"
                      {...register("password", { required: "Password is required" })}
                    />
                    {errors.password && (
                      <p className="text-sm mt-1 text-red-900">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <button type="submit" 
                      className="mt-4 bg-indigo-500 text-white font-semibold hover:bg-indigo-600 min-w-[250px] h-10 cursor-pointer rounded-lg border-none"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
              <CreateNewAccount />
            </div>
          }
        <SocialLogin />
      </div>
    </div>
  )
}

export default Login;
