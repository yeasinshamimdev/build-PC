import { Button, Input } from 'antd';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const isOpen = useSelector(state => state.modal.open)
  const dispatch = useDispatch();
  
  const onSubmit = (data) => {
    console.log(data);
    setTimeout(() => {
      dispatch(setOpen());
    }, 1000);
  };
  
  return (
    <div className={"grid gap-6 mt-8"}>
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
            <Button className="mt-4 bg-indigo-500 text-white font-semibold hover:bg-indigo-600 md:min-w-[250px] h-10">
              Create Account
            </Button>
          </div>
        </div>
      </form>
      <div className="flex items-center">
        <p className="text-sm ">Create a build PC account?</p>
        <button className="ml-2 bg-white border-0 cursor-pointer text-blue-400 text-[16px] font-semibold underline">
          sign up
        </button>
      </div>
    </div>
  )
}
