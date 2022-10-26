import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "./Course";

const Home = () => {
    const courses = useLoaderData();
    return (
        <div className="grid grid-cols-3 gap-8 lg:pl-5 my-10">
            {
                courses.map(course => <Course
                key={course.id}
                course={course}
                ></Course>)
            }
        </div>
    )
}

export default Home;