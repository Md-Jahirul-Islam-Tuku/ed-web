import React, { useEffect, useState } from "react";

const SideBar = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="">
            <h1 className="text-3xl my-10 font-bold">Course Catagory: {courses.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <tbody>
                        {
                            courses.map(course =>
                                <tr
                                    key={course.id}
                                ><th className="text-2xl bg-cyan-100 hover:bg-cyan-200">{course.name}</th></tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SideBar;