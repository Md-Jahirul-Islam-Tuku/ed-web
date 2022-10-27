import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "./Course";

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-8 lg:pl-5 my-10">
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)
            }
        </div>
    )
}

export default Courses;