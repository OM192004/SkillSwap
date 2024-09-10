import { useState } from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm"; // Import the ReviewForm component

const ReviewList = () => {
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    return (
        <div className="bg-gray-100 p-5">
            <div className="m-4 flex flex-col md:flex-row lg:mx-16 gap-3">
                <div className="w-full md:w-1/4">
                    <div className="shadow-md shadow-gray-400 p-2.5 rounded-sm py-5 bg-white">
                        <h2 className="my-2.5 text-4xl font-bold">Reviews</h2>
                        {/* Star Ratings */}
                        <div className="flex items-center">
                            <svg className="w-4 h-4 text-purple-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-purple-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-purple-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-purple-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-gray-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            
                            <p className="ms-1 text-sm font-medium text-gray-500">4 out of 5</p>
                        </div>
                    </div>

                    <hr className="my-2.5"></hr>

                    {/* Review This Course */}
                    <div className="shadow-md shadow-gray-400 p-2.5 rounded-sm py-4 bg-white">
                        <h2 className="text-2xl font-semibold my-2.5">Review this course</h2>
                        <p className="my-2.5">Share your thoughts with other learners</p>
                        <button
                            className="my-2.5 border border-purple-600 bg-purple-600 rounded-sm text-white px-2.5 py-1 mx-auto"
                            onClick={() => setShowModal(true)} // Show the modal when clicked
                        >
                            Write a review
                        </button>
                    </div>
                </div>

                {/* Review List */}
                <div className="w-full md:w-3/4">
                    <div className="max-w-full mx-auto p-6 bg-white rounded-sm shadow-md">
                        <h2 className="text-3xl font-bold mb-6">Reviews</h2>
                        <hr></hr>
                        <Review />
                        <Review />
                        <Review />
                    </div>
                </div>
            </div>

            {/* Modal for the Review Form */}
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
                            X
                            </button>
                            <ReviewForm /> {/* Review form component */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReviewList;
