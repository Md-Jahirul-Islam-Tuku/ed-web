import React from "react";

const Course = ({ course }) => {
  const { name, price, rating, details, thumbnail_url } = course;
  return (
    <div className="rounded-lg shadow-lg border bg-slate-100 sm:w-72 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex items-center justify-between p-3">
        <div className="text-lg font-bold">{name}</div>
        <div className="text-md font-bold">Price: {price}</div>
      </div>
      <img src={thumbnail_url} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500 px-3" />
      <div className="p-3">
        <div className="text-left px-4">
          <h1 className="text-lg">{details.slice(0, 100) + '...'}</h1>
        </div>
        <div className="flex justify-center pt-3 pb-1">
          <button type="button" className="px-8 py-3 font-bold rounded-full dark:bg-gray-100 dark:text-gray-800 bg-orange-200">Details</button>
        </div>
      </div>
    </div>
  )
}

export default Course;