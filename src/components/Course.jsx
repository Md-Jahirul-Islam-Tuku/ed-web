import React from "react";
import {  FaLongArrowAltRight, FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { name, price, rating, details, title, thumbnail_url } = course;
  return (
    // <div className="rounded-t-xl max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
    //   <div className="flex justify-between pb-4 border-bottom">
    //     <div className="flex items-center">
    //       <h3 className="text-lg font-bold">{name}</h3>
    //     </div>

    //   </div>
    //   <div className="space-y-4">
    //     <div className="space-y-2">
    //       <img src={thumbnail_url} alt="" className="block object-cover object-center w-full rounded-md h-80 dark:bg-gray-500" />
    //       <div className="flex items-center justify-between">
    //         <div className="flex items-center"><FaStar /><h4 className="text-xl ml-2">{rating}</h4></div>
    //         <h4>Price: {price}</h4>
    //       </div>
    //     </div>
    //     <div className="space-y-2">
    //       <h3 className="text-xl font-semibold dark:text-violet-400">{title}</h3>
    //       <p className="text-left leading-snug dark:text-gray-400">{details.slice(0,150)+'...'}</p>
    //     </div>
    //     <div>
    //       <div className="card-actions justify-end">
    //         <button className="btn btn-primary">Buy Now</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="card card-compact mb-10 md:mb-0 lg:mb-0 w-100 bg-white lg:shadow-xl shadow-lg">
      <div className="pl-4 py-3">
        <h2 className="card-title">{name}</h2>
      </div>
      <figure><img className="lg:h-72 lg:w-96 px-2 lg:px-0" src={thumbnail_url} alt="Shoes" /></figure>
      <div className="card-title px-4 pt-2 flex justify-between">
        <div className="flex items-center"><FaStar /><h1 className="ml-2">{rating}</h1></div>
        <div>
          <h1>Price: <span className="text-error">{price}</span></h1>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details.slice(0, 150) + '...'}</p>
        <div className="card-actions justify-end">
          <Link to={`/course/${course.id}`} className="btn btn-info font-bold text-white">Details <FaLongArrowAltRight className="ml-1" /> </Link>
        </div>
      </div>
    </div>
  )
}

export default Course;