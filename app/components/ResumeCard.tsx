import React from 'react'
import {Link} from "react-router";

// @ts-ignore
const ResumeCard = ({resume} : {resume: Resume}) => {
    // @ts-ignore
    return (
        <Link to={`/resume/${resume.id}` } className="resume-card animate-in fade-in duration-1000">
            <div className="flex flex-col gap-2">
                <h2 className="text-black! font-bold  wrap-break-word">
                    {resume.companyName}
                </h2>
                <h3  className="text-lg wrap-break-word text-gray-500">
                    {resume.jobTitle}
                </h3>
            </div>
            <div className="shrink-0">

            </div>
        </Link>
    )
}
export default ResumeCard
