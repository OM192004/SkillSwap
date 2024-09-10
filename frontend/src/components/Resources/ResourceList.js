import React from "react";
import { Link } from 'react-router-dom';
import ResourceDownload from "./ResourceDownload";

const ResourceList = () => {

    return (
        <section class="container px-4 mx-auto bg-purple-50  p-5">
            <div className="bg-gray-100 p-2.5">
            <div class="sm:flex sm:items-center sm:justify-between">
                <div className="flex ml-10 mt-5 gap-10 items-baseline ">
                    <h2 class="text-3xl  text-black dark:text-black font-semibold">Resources</h2>
                    <div className="w-40 lg:w-60  border-purple-950 p-2.5 text-purple-600 flex items-center bg-white rounded-sm border-2 h-12 shadow-md shadow-gray-300">
                    <span class="material-icons">search</span>
                    <input type="text" placeholder="Search" className="w-40 lg:w-60  border-purple-600 p-2.5 outline-none"></input>
                    </div>
                </div>
                <div class="flex items-center mt-4 gap-x-3">


                    <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-purple-600 rounded-sm sm:w-auto gap-x-2 hover:bg-white hover:text-purple-600 border border-purple-700">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3098_154395)">
                                <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3098_154395">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <Link to="/ResourceUpload">
                            <span>Upload</span>
                        </Link>
                        
                    </button>
                </div>
            </div>
            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-sm my-5"></div>

           
            <ResourceDownload Title="OM"/>
            <ResourceDownload Title="PRITAM"/>
            <ResourceDownload Title="VAIBHAV"/>
            <ResourceDownload Title="SAHIL"/>
            <ResourceDownload Title="Ketan" />
            
           

            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg my-5"></div>

            <div class="flex items-center justify-between mt-6">
                <div class="flex items-center px-5 py-2 text-sm text-white capitalize transition-colors duration-200 bg-purple-600 border rounded-sm gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>

                    <button>
                        Previous
                    </button>
                </div>


                {/*
        <div class="items-center hidden md:flex gap-x-3">
            <a href="#" class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
        </div>*/}

                <div class="flex items-center px-5 py-2 text-sm text-white capitalize transition-colors duration-200 bg-purple-600 border rounded-sm gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    
                    <button>
                        Next
                    </button>
                    

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </div>
            </div>
        </section>

    );

};

export default ResourceList;