import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import bg from '../assets/morning.jpg';
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { BiArrowBack } from 'react-icons/bi'


const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [btn, setBtn] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://recipeappserver.onrender.com/auth/register", { username, password });
            alert(response.data.message);
            // navigate("/login");
        }
        catch (err) {
            console.log(err);
        }

    }
    function handlePassword() {
        setBtn(!btn);
    }
    return (
        <>
            <div className='w-full h-screen flex sm:flex-row flex-col items-center justify-between'>
                <div>
                    <div className='relative'>
                        <img src={bg} alt="sunshine" className='w-[800px] h-screen object-cover' />
                    </div>
                    <div className='absolute top-5 left-5'>
                        <Link to='/'><BiArrowBack size={35} className="bg-white rounded-full p-2 hover:shadow-md duration-75" /></Link>
                    </div>
                </div>
                <div className='xl:mr-48 lg:mr-20 sm:mr-5 sm:static absolute top-[25%] bg-white px-5 py-10 rounded-md'>
                    <div className='text-2xl font-extrabold mb-10'>
                        <p>Create an account for free!</p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center font-medium">
                        <div className='flex flex-col justify-center mb-8'>
                            <input type="text" placeholder='Username' className='border-b-2 border-gray-400 placeholder:text-slate-600 px-1 py-1 sm:w-[320px] w-[280px] outline-none focus:border-slate-900 focus:placeholder:text-slate-900' onChange={(e) => { setUsername(e.target.value) }} required />
                        </div>
                        <div className='mb-10'>
                            <div className='relative'>
                                {btn ?
                                    (
                                        <input type="text" placeholder='Password' className='border-b-2 border-gray-400 placeholder:text-slate-600 px-1 py-1 sm:w-[320px] w-[280px] outline-none focus:border-slate-900 focus:placeholder:text-slate-900' onChange={(e) => { setPassword(e.target.value) }} required />
                                    ) : (
                                        <input type="password" placeholder='Password' className='border-b-2 border-gray-400 placeholder:text-slate-600 px-1 py-1 sm:w-[320px] w-[280px] outline-none focus:border-slate-900 focus:placeholder:text-slate-900' onChange={(e) => { setPassword(e.target.value) }} required />
                                    )}
                                <div className='absolute top-2 right-2 cursor-pointer' onClick={handlePassword}>
                                    {btn ? (
                                        <HiEye fontSize={20} />
                                    ) : (
                                        <HiEyeOff fontSize={20} />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='hover:bg-red-500 bg-black font-medium duration-150 mb-5 px-4 py-3 sm:w-[320px] w-[280px] text-white rounded-full'>Create account</button>
                        </div>
                    </form>
                    <div className='font-medium text-center'>
                        <p>Already have an account? <span className='font-bold underline hover:text-red-500'><Link to="/login">Login</Link></span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
