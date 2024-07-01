import React from "react";
import { LuWallet } from "react-icons/lu";
import { CiMenuKebab } from "react-icons/ci";
import { IoPieChartOutline } from "react-icons/io5";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { BsPersonVcard } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import profile from '../../assets/react.svg'
import { IoNotificationsOutline } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";


const Navbar = () => {


    return (

        <div className='w-full  flex items-cente justify-between bg-white shadow-sm border-2'>
            <div className='text-indigo-950 m-4 font-bold text-xl md:text-2xl dark:text-transparent bg-clip-text dark:bg-gradient-to-l from-indigo-800 to-pink-800 '>i-Haul</div>
            <div className='flex gap-4 items-center justify-end px-4 text-indigo-950 dark:text-slate-800'>
                <img src={profile} className='rounded-full w-8 h-8' />
            </div>
        </div>

    );
}

export default Navbar;