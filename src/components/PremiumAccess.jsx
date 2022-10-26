import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumAccess = () => {
   const coursePremium = useLoaderData();
   const { id, name, price, rating, total_purchase, title, thumbnail_url } = coursePremium;
   return (
      <div className="top-40 left-96 card w-96 bg-base-100 shadow-xl image-full">
         <figure><img src={thumbnail_url} alt="Thumbnail" /></figure>
         <div className="card-body">
            <p className='text-2xl text-success'>{title}</p>
            <h2 className="card-title text-secondary">Course ID: {id}</h2>
            <h2 className="card-title text-secondary">Name: {name}</h2>
            <h2 className="card-title text-secondary">Price: {price}</h2>
            <h2 className="card-title text-secondary">Ratings: {rating}</h2>
            <h2 className="card-title text-secondary">Total Purchase: {total_purchase}</h2>
         </div>
      </div>
   );
};

export default PremiumAccess;