'use client'
import { useContext } from 'react'
import NavContext from '@/context/NavContext'

const AddJoinPage = () => {
    const { active } = useContext(NavContext);
    return (
        <div className='p-6 overflow-scroll text-black h-full hide-scrollbar add-page' >
            <div className='add-class'>
                <h1 className='font'>Class Name</h1>
            </div>
        </div>
    )
}

export default AddJoinPage