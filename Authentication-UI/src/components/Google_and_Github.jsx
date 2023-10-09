import React from "react";
import { FcGoogle } from "react-icons/fc";
import {BsGithub} from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Google_and_Github = () => {
    
    return (
        <div className="w-1/5 flex flex-col gap-6 max-md:w-full max-md:p-8">
            <button
                type="submit"
                className="uppercase bg-[#e6e6e6] w-full h-[62px] text-[18px] font-bold text-[#4e457b] flex items-center justify-center gap-6"
            >
                <FcGoogle size={32} /> login with google
            </button>
            <button
                type="submit"
                className="uppercase bg-[#4e457b] w-full h-[62px] text-[18px] font-bold text-white flex items-center justify-center gap-6"
            >
                <BsGithub size={32} /> login with github
            </button>
            <ToastContainer/>
        </div>
    );
};

export default Google_and_Github;
