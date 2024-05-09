'use client'
import { useContext, useEffect, useState } from 'react'
import NavContext from '@/context/NavContext'
import { useRouter } from 'next/navigation'

const StudentJoinClass = () => {
    const router = useRouter()
    const { setActive, active } = useContext(NavContext);
    const [code, setCode] = useState("");
    var arr;
    if (process.browser) {
        arr = window.location.search.split(/[=&]/);
    }
    useEffect(() => {
        if (arr[1]) {
            if (arr[1] === "addclass")
                setActive(0);
            const c = arr[3]?.toString();
            setCode(c);
        }
    }, [arr, setActive])
    return (
        <div className='p-6 overflow-scroll text-black h-full hide-scrollbar add-page' >
            <div className='add-class'>
                <h1 className='text-2xl mb-3 tracking-wide font-medium text-purple-950'>Class code</h1>
                <input type="text" className='outline-none border-[1px] border-gray-700 bg-slate-100 focus:border-purple-800 focus:border-[2.5px] p-2 h-10 w-96 rounded' value={code} onChange={(e) => setCode(e.target.value)} />

            </div>
        </div>
    )
}

export default StudentJoinClass