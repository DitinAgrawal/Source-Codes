import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Email_and_Password = () => {

    const [input,setInput] = useState({
        email:'',
        password:''
    })

    const [toggle,setToggle] = useState(false)

    const handleChange = (e) => {
        const {name,value} = e.target
        setInput(prev => ({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(toggle){
            await signinUser()
        }else{
            await createUser()
            setToggle(true)
        }
        setInput({
            email:'',
            password:''
        })
    }

    return (
        <div className="h-screen flex flex-col w-1/4 items-center justify-center max-md:w-full max-md:p-8 max-md:mt-24">
            <div className="text-center text-[30px] font-bold uppercase text-[#403866]">
                {toggle ? "Login" : "Register"}
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col mt-12 gap-4">
                    <input
                        type="email"
                        className="bg-[#e6e6e6] leading-4 text-[18px] h-[62px] ps-[20px] pr-[38px] text-[#403866] font-bold focus:outline-none"
                        placeholder="Email"
                        required
                        name="email"
                        value={input.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        className="bg-[#e6e6e6] leading-4 text-[18px] h-[62px] ps-[20px] pr-[38px] text-[#403866] font-bold focus:outline-none"
                        placeholder="Password"
                        required
                        name="password"
                        value={input.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-8">
                    <button
                        type="submit"
                        className="uppercase bg-[#827ffe] w-full h-[62px] text-[16px] font-bold text-white"
                    >
                        {toggle ? "Login" : "Register"}
                    </button>
                </div>
                <div className="text-center uppercase font-bold underline text-sm mt-4 cursor-pointer" onClick={() => setToggle(!toggle)}>{!toggle ? "Already have Account? Login" : "Don't have Account? Register"}</div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Email_and_Password;