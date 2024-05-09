'use client'
import Image from 'next/image'
import { useContext } from 'react'
const HomeItems = [{ name: "OwnClasses" }, { name: "Institutes" }];
const AddPageItems = [{ name: "Add Class" }, { name: "Join Institute" }];
const StudentAddClass = [{ name: "Join Class" }]
import NavContext from '@/context/NavContext'
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const path = usePathname();
    const { active, setActive } = useContext(NavContext);
    const regex = /^\/h.*/;
    const teacherAddRegex = /^\/add-join.*/;
    const studentJoinRegex = /^\/join-class.*/;
    console.log(path);
    return (
        <div className='left-0 h-screen p-4 max-h-screen bg-purple-100 text-black flex flex-col gap-10'>
            <div className='flex gap-2 items-center logo'>
                <Image src="/c.jpg" alt='logo' width={40} height={40} />
                <Image src="/name.jpg" alt="name" width={120} height={40} />
            </div>
            <div className='flex flex-col gap-5 nav-items-list'>
                {teacherAddRegex.test(path) && (
                    AddPageItems?.map((ele, i) => (
                        <div key={i} className={`py-2 px-4 border-2 border-gray-300 rounded-lg cursor-pointer ${i == active ? "bg-purple-950 text-white shadow-sm shadow-purple-950 border-white" : ""}`} onClick={(e) => { setActive(i) }}>{ele.name}</div>
                    )))
                }
                {studentJoinRegex.test(path) && (
                    StudentAddClass?.map((ele, i) => (
                        <div key={i} className={`py-2 px-4 border-2 border-gray-300 rounded-lg cursor-pointer ${i == active ? "bg-purple-950 text-white shadow-sm shadow-purple-950 border-white" : ""}`} onClick={(e) => { setActive(i) }}>{ele.name}</div>
                    )))
                }
                {regex.test(path) && (
                    HomeItems?.map((ele, i) => (
                        <div key={i} className={`py-2 px-4 border-2 border-gray-300 rounded-lg cursor-pointer ${i == active ? "bg-purple-950 text-white shadow-sm shadow-purple-950 border-white" : ""}`} onClick={() => setActive(i)}>{ele.name}</div>
                    )))
                }
            </div>
        </div >
    )
}

export default Navbar