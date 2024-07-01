"use client"
import React from 'react';
import { FcGoogle } from "react-icons/fc";

const LoginBtn = () => {
    return (
        <div>
            <button onClick={()=>{
                
            }} className='btn bg-slate-800 text-white '>
            <FcGoogle className='text-2xl'/>
            Login
                </button>
        </div>
    );
};

export default LoginBtn;