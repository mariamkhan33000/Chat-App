import { useForm } from "react-hook-form";
import axios from "axios";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // watch th password and confirm password fields

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const validatePassworMatch = (value) => {
    return value === password || "password do not match";
  };
  const onSubmit = (data) => {
    const userInfo = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    axios
      .post("http://localhost:4000/users/signup", userInfo)
      .then((response) => {
        if (response.data) {
          alert("signup success full");
        }
        localStorage.setItem("Chatapp",JSON.stringify(response.data));
      })
      .catch((error) => {
        if (error.response) {
          alert("Error: " + error.response.data.error);
        }
      });
  };

  return (
    <div className="bg-slate-800 h-screen flex items-center justify-center">
      <div className="w-[400px] bg-slate-700 p-4 text-white rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center">
            <h1 className="text-slate-400 text-xl">
              Text{" "}
              <span className="text-green-500 ml-4 font-semibold text-xl">
                App
              </span>
            </h1>
          </div>
          <div className="">
            <h1 className=" text-xl ">Signup</h1>
            <div className="flex-col my-4">
              <input
                type="text"
                placeholder="FullName . . . "
                {...register("fullName", { required: true })}
                className="bg-transparent w-full border border-gray-500 rounded-lg px-2 py-2 outline-none my-2"
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm ">
                  This field is required
                </span>
              )}

              <input
                type="Email"
                placeholder="Email . . . "
                {...register("email", { required: true })}
                className="bg-transparent w-full border border-gray-500 rounded-lg px-2 py-2 outline-none my-2"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}

              <input
                type="text"
                placeholder="Password . . . "
                {...register("password", { required: true })}
                className="bg-transparent w-full border border-gray-500 rounded-lg px-2 py-2 outline-none my-2"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}

              <input
                type="password"
                placeholder="Confirm Password . . . "
                {...register("confirmPassword", {
                  required: true,
                  validate: validatePassworMatch,
                })}
                className="bg-transparent w-full border border-gray-500 rounded-lg px-2 py-2 outline-none my-2"
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-slate-400">Have an account ? </p>
            <span className="text-blue-600 underline cursor-pointer hover:text-blue-700">
              Login
            </span>
            <button
              type="submit"
              value="Signup"
              className="mr-2 bg-green-600 px-3 py-1 rounded-md hover:bg-green-800"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
