'use client'
import React, { useContext, useState } from 'react'
import { MdGroups3 } from 'react-icons/md';
import ClassBlock from "@/components/ClassBlock"
import NavContext from '@/context/NavContext';

const own = [
    { className: 'CSE1', classOwner: "Jyoti", color: `pink`, noOfStudents: 23 },
    { className: 'CSE2', classOwner: "Biman", color: `teal`, noOfStudents: 32 },
    { className: 'CSE3', classOwner: "Bhalu", color: `slate`, noOfStudents: 40 },
    { className: 'CSE3', classOwner: "Bhalu", color: `lime`, noOfStudents: 40 },
    { className: 'CSE2', classOwner: "Biman", color: `orange`, noOfStudents: 32 },];

const inst = [
    { className: 'ECE1', color: "orange", classOwner: "SPD", noOfStudents: 67 },
    { className: 'ECE2', color: "lime", classOwner: "Prasenjit Das", noOfStudents: 90 }];
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