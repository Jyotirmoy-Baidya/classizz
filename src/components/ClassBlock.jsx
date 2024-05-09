'use client'
import { MdGroups3 } from 'react-icons/md'

const ClassBlock = ({ content }) => {
    const bg_color = `bg-${content.color}-100`;
    const border_color = `border-${content.color}-500`
    console.log(border_color);
    return (
        <div className={`h-36 w-auto min-w-[340px] max-w-[380px] p-6 border-[1px] bg-te ${border_color} ${content.color1} hover:border-[2.5px] cursor-pointer text-black dark:text-slate-700 shrink-0 flex justify-between rounded-md`} >
            <div className="flex flex-col justify-between h-full names">
                <div className="text-2xl tracking-widest font-bold class-name">{content.className}</div>
                <div className="text-lg tracking-wider owner-name">{content.classOwner}</div>
            </div>
            <div className="text-xl flex flex-col items-center gap-2 stundent-count">
                <div className="text-4xl text-slate-700" ><MdGroups3 /></div>
                <div className="font-medium tracking-wider">{content.noOfStudents}</div>
            </div>
        </div>
    )
}

export default ClassBlock