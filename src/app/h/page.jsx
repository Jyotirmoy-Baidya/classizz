'use client'
import React, { useContext, useState } from 'react'
import { MdGroups3 } from 'react-icons/md';
import ClassBlock from "@/components/ClassBlock"
import NavContext from '@/context/NavContext';

const own = [
    { className: 'CSE1', classOwner: "Jyoti", color: 'pink', border: "border-pink-100", noOfStudents: 23 },
    { className: 'CSE2', classOwner: "Biman", color: 'teal', border: "border-pink-100", noOfStudents: 32 },
    { className: 'CSE3', classOwner: "Bhalu", color: 'bg-slate-100', border: "border-pink-100", noOfStudents: 40 },
    { className: 'CSE3', classOwner: "Bhalu", color: 'bg-cyan-100', border: "border-pink-100", noOfStudents: 40 },
    { className: 'CSE2', classOwner: "Biman", color: 'bg-gray-100', border: "border-pink-100", noOfStudents: 32 },];

const inst = [
    { className: 'ECE1', color: "bg-orange-100", classOwner: "SPD", noOfStudents: 67 },
    { className: 'ECE2', color: "bg-green-100", classOwner: "Prasenjit Das", noOfStudents: 90 }];
const userName = "Jyotirmoy";

const HomePage = () => {
    const { active } = useContext(NavContext);
    return (
        <div className='p-6 overflow-scroll h-full hide-scrollbar'>
            <div className='grid grid-cols-1 sm:grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-10 class-lists'>
                {
                    active == 0 && own?.map((ele, i) => (
                        <ClassBlock key={i} content={ele} />
                    ))
                }
                {
                    active == 1 && inst?.map((ele, i) => (
                        <ClassBlock key={i} content={ele} />
                    ))
                }
            </div>


        </div>
    )
}

export default HomePage