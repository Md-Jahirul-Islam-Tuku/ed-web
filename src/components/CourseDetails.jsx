import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import PDF from './PDF';

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { id, name, price, rating, total_purchase, details, title, image_url } = courseDetails;
  return (
    <div className="max-w-full lg:mx-44 my-10 p-4 shadow-md bg-white rounded-lg">
      <div className="flex justify-between pb-4 border-bottom">
        <div className="flex items-center">
          <h2 className="mb-0 capitalize text-lg font-bold">{name}</h2>
        </div>
        <PDF courseDetails={courseDetails} />
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img src={image_url} alt="" className="block object-cover object-center w-full rounded-md h-full dark:bg-gray-500" />
          <div className="flex items-center justify-between text-lg mx-2">
            <div className='flex items-center'>
              <FaStar /><p className='ml-2'>{rating}</p>
              <FaShoppingCart className="ml-4" /><p className='ml-2'>{total_purchase}</p>
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Price: <span className='text-orange-600'>{price}</span></h3>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="my-5">
            <h3 className="text-2xl font-semibold dark:text-violet-400">{title}</h3>
          </div>
          <p className="leading-snug dark:text-gray-400 text-justify">{details}</p>
        </div>
        <Link to={`/premium-access/${id}`} type="button" className="flex items-center justify-center w-56 p-3 font-bold tracking-wide rounded-md bg-blue-400 text-white text-lg">Get premium access</Link>
      </div>
    </div>
  );
};

export default CourseDetails;