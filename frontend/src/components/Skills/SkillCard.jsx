import React, { useState } from 'react'

import {FiEdit2 } from 'react-icons/fi';
import SkillEdit from './SkillEdit';

const skills = {
    skill: "C (Programming Language)",
    university: "Savitribai Phule Pune University"
};
function SkillCard() {
    const [showedit,setShowedit]=useState(false);
    console.log(skills.skill);
    return (
        <div className='w-full rounded-sm bg-white p-2.5 flex justify-between'>
            <div>
            <h1 className='font-semibold text-lg'>{skills.skill}</h1>
            <div className='text-gray-600 flex gap-2.5'>
                <span class="material-symbols-outlined text-purple-600">
                    school
                </span>
                <h4 className='text-md'>{skills.university}</h4>
            </div>
            </div>
            <button className='text-purple-600 hover:text-gray-500' onClick={()=>{setShowedit(true)}}>
            <FiEdit2 size={20} />
            </button>
            {showedit && (
                <div>
                    {/* Background Blur */}
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm z-40"></div>

                    {/* Modal Content */}
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="max-w-lg w-full mx-auto p-6 bg-white rounded-lg shadow-md relative">
                            {/* Close Modal Button */}
                            <button
                                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                                onClick={() => setShowedit(false)} // Close modal on button click
                            >
                                ✖
                            </button>
                            <SkillEdit Skill={skills.skill} university={skills.university}/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SkillCard;
