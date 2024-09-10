import { useState } from "react";
import { FiPlus } from 'react-icons/fi'; // Import icons for plus and edit
import AddSkill from "./SkillAdd"; // AddSkillForm component for adding new skills
import SkillCard from "./SkillCard";

const SkillList = () => {
    const [showModal, setShowModal] = useState(false); // Control modal visibility
    

    return (
        <div className="bg-gray-50 p-6 rounded-md shadow-sm w-full max-w-xl mx-auto my-5">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Skills</h2>
                <div className="flex space-x-2">
                    {/* Add and Edit Icons */}
                    
                    <button
                        className="text-gray-600 hover:text-purple-600"
                        onClick={() => setShowModal(true)} // Show modal when clicked
                    >
                        <FiPlus size={24} />
                    </button>
                    
                </div>
            </div>

            <hr className="my-4 text-purple-400" />

            {/* Skills List */}
            <div className="space-y-4">
                <SkillCard />
                <SkillCard />
            </div>

            {/* Modal for the Add Skill Form */}
            {showModal && (
                <div>
                    {/* Background Blur */}
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm z-40"></div>

                    {/* Modal Content */}
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="max-w-lg w-full mx-auto p-6 bg-white rounded-lg shadow-md relative">
                            {/* Close Modal Button */}
                            <button
                                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                                onClick={() => setShowModal(false)} // Close modal on button click
                            >
                                ✖
                            </button>
                            <AddSkill/> {/* Add skill form component */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SkillList;
