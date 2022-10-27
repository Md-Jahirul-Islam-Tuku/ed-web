import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
   const coursePremium = useLoaderData();
   const { id, name, price, rating, total_purchase, title, thumbnail_url } = coursePremium;
   return (
      <div className="my-10 lg:my-0 lg:top-[40%] lg:left-[35%] card lg:w-96 bg-base-100 shadow-xl image-full">
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

export default Checkout;