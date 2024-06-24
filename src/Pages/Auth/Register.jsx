/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Auth/AuthProvider";

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch // Watch function from useForm to watch field values
    } = useForm();
    
    const password = watch("password"); // Get the value of password field

    const onSubmit = (data) => {
                createUser(data.email, data.password).then((result) => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    updateUserProfile(data.name, data.image).then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            image: data.image,
                            role: 'user',
                        };
                        axiosPublic
                        .post('/users', userInfo)
                        .then((res) => {
                            if (res.data.insertedId) {
                                console.log('user created successfully');
                                reset();
                                toast.success("Wow Registration Complete! 😎");
                                navigate('/');
                            }
                        })
                        .catch((error) => console.log(error));
                    });
                });
            }


    return (
        <div>
            {/* <Helmet>
        <title>Registration | Contes Buddy</title>
      </Helmet> */}
            <div className="flex justify-center text-2xl mb-10 mt-5 items-center py-4 overflow-x-auto whitespace-nowrap">
                <Link to="/" className="text-gray-600 ">
                    Home
                </Link>
                <span className="mx-5 text-gray-500  rtl:-scale-x-100">
                    <i className="fa-solid text-base fa-chevron-right"></i>
                </span>
                <Link to='/register' className="text-sky-600  hover:underline">
                    Register
                </Link>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-full max-w-2xl p-6 m-auto mx-auto bg-sky-100 rounded shadow-md ">
                    <div className="flex  justify-center mx-auto">
                    </div>
                    <div className="flex  justify-center mx-auto mt-2">
                        <h1 className="text-2xl font-bold">Welcome, Registration here!!</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        <div>
                            <label className="block text-xl font-semibold text-gray-800 ">
                                Name
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                name="name"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg   dark:border-gray-600 focus:border-sky-400 dark:focus:border-sky-300 text-xl focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            {errors.name && <span className="text-sky-600">Name is required</span>}
                        </div>


                        <div className="mt-4">
                            <label className="block text-xl font-semibold text-gray-800 ">
                              Image URL
                            </label>
                            <input
                                type="text"
                                {...register("image", { required: true })}
                                name="image"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg   dark:border-gray-600 focus:border-sky-400 dark:focus:border-sky-300 text-xl focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            {errors.image && <span className="text-sky-600">Image is required</span>}
                        </div>
                 
                        <div className="mt-4">
                            <label className="block text-xl font-semibold text-gray-800 ">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                {...register("email", { required: true })}
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg   dark:border-gray-600 focus:border-sky-400 dark:focus:border-sky-300 text-xl focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            {errors.email && <span className="text-sky-600">Email is required</span>}
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <label className="block text-xl  font-semibold  text-gray-800 ">
                                    Password
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"} // Toggle password visibility based on showPassword state
                                    name="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                    className="block w-full px-4 py-4 pr-14 mt-2 text-gray-700 bg-white border rounded-lg   dark:border-gray-600 focus:border-sky-400 dark:focus:border-sky-300 text-xl focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                <button
                                    type='button'
                                    onClick={togglePasswordVisibility}
                                    className='absolute top-1/2 right-4 transform -translate-y-1/2 text-skynpm install express-500 hover:text-skynpm install express-700 focus:outline-none'
                                >
                                    {showPassword ? <FaEyeSlash className='text-2xl' /> : <FaEye className='text-2xl' />}
                                </button>
                            </div>
                            {errors.password?.type === 'required' && <p className="text-sky-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-sky-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-sky-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-sky-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        </div>
                       
                        <div className="mt-4">
                            <label className="block text-xl font-semibold text-gray-800 ">
                                Confirm Password
                            </label>
                            <div className="relative"> 
                            <input
                                type={showPassword ? "text" : "password"} // Toggle password visibility based on showPassword state
                                name="confirmPassword"
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: (value) => value === password // Validate if confirm password matches password
                                })}
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg   dark:border-gray-600 focus:border-sky-400 dark:focus:border-sky-300 text-xl focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                               <button
                                    type='button'
                                    onClick={togglePasswordVisibility}
                                    className='absolute top-1/2 right-4 transform -translate-y-1/2 text-skynpm install express-500 hover:text-skynpm install express-700 focus:outline-none'
                                >
                                    {showPassword ? <FaEyeSlash className='text-2xl' /> : <FaEye className='text-2xl' />}
                                </button>
                                </div>
                            {errors.confirmPassword && <p className="text-sky-600">Passwords do not match</p>}
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full px-6 py-4 text-xl font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                    {/* <GoogleButton/> */}
                    <h1 className="flex gap-x-1 justify-center mt-5">
                        <p className="text-xl text-center font-medium  text-gray-600">
                            Already have an account?
                        </p>
                        <Link to="/login">
                            <p className="font-medium text-xl text-center  text-sky-500 hover:underline">
                                Login
                            </p>
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Register;