'use client'
import React, { useState } from 'react'

function Toggle() {
    const [role, setRole] = useState("");

    return (
        <div className='w-8/12 flex flex-col gap-2'>
            <p>Role?</p>
            <ul className="flex w-full gap-6">
                <li onClick={(e) => { setRole("Student") }}>
                    <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required />
                    <label htmlFor="hosting-small" className="inline-flex items-center justify-between w-full text-blue-500 border-blue-400 border-2 rounded-lg cursor-pointer peer-checked:bg-purple-600  peer-checked:text-white peer-checked:border-purple-600 p-2">
                        <div className="w-full text-lg font-semibold tracking-wide">Student</div>
                    </label>
                </li>
                <li onClick={() => setRole("Teacher")} >
                    <input type="radio" id="hosting-big" name="hosting" value="hosting-big" className="hidden peer" />
                    <label for="hosting-big" className="inline-flex items-center justify-between w-full text-blue-500 border-blue-400 border-2 rounded-lg cursor-pointer peer-checked:bg-purple-600 peer-checked:text-white peer-checked:border-purple-600 p-2">
                        <div className="w-full text-lg font-semibold tracking-wide">Teacher</div>
                    </label>
                </li>
            </ul>
        </div>
    )
}

export default Toggle