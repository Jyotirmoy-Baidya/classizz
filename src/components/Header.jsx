import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import Image from "next/image";
import { MdAdd } from "react-icons/md";
import Link from "next/link";
function Header() {
    return (
        <div className="w-full h-18 px-3 py-4 flex items-center justify-between bg-purple-100 text-black header">
            <div className='flex h-10 w-72 bg-gray-50 px-2 rounded border-[1px] search-bar'>
                <input type="text" className='h-full rounded w-full outline-none bg-gray-50' placeholder='Search Here' />
                <button className='search-btn'><IoSearch /></button>
            </div>
            <div className="flex justify-center items-center text-2xl gap-6">
                <Link href='/add-join'><MdAdd /></Link>
                <div className="notification"><FaRegBell /></div>
                <div className="">
                    <Image src="/image.png" alt="profile-pic" className="rounded-full border-[1px] border-black" height={45} width={35} />
                </div>
            </div>
        </div>
    )
}

export default Header