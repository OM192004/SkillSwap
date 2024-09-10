import React from "react";

const ResourceDownload = (Props) => {

    return (
        <div
            className="w-full lg:w-[1426px] m-2.5 bg-white mx-auto border-2 border-purple-950 rounded-sm flex p-2.5 justify-start transition-transform duration-500 shadow-sm shadow-gray-400"
            style={{ transform: "scale(1)", transition: "transform 0.5s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.008)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
            <div className="flex gap-1 items-center">
                <span className="material-symbols-outlined text-purple-600">
                    description
                </span>
                <h2 className="font-semibold text-xl">{Props.Title}</h2>
            </div>

            <div className="flex gap-1 items-center ml-auto border-2 rounded-sm border-purple-700 px-2.5 py-1 bg-purple-600 text-white hover:text-purple-600 hover:bg-white">
                <span className="material-symbols-outlined">download</span>
                <button className="">Download</button>
            </div>
        </div>
    )
}
export default ResourceDownload;