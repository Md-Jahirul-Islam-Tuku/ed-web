import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumAccess = () => {
   const coursePremium = useLoaderData();
   const { id, name, price, rating, total_purchase, title, thumbnail_url } = coursePremium;
   return (
      <div className="top-40 left-96 card w-96 bg-base-100 shadow-xl image-full">
         <figure><img src={thumbnail_url} alt="Thumbnail" /></figure>
         <div className="card-body">
            <p className='text-2xl text-white'>{title}</p>
            <h2 className="card-title text-white">Course ID: {id}</h2>
            <h2 className="card-title text-white">Name: {name}</h2>
            <h2 className="card-title text-white">Price: {price}</h2>
            <h2 className="card-title text-white">Ratings: {rating}</h2>
            <h2 className="card-title text-white">Total Purchase: {total_purchase}</h2>
         </div>
      </div>
   );
};

export default PremiumAccess;